import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface Config {
  productContextDir: string;
  templatesDir: string;
  blocksDir: string;
  projectsDir: string;
  promptsDir: string;
}

let configCache: Config | null = null;

export function cfg(): Config {
  if (configCache) return configCache;
  
  // Find repo root by looking for config in supported locations
  let currentDir = __dirname;
  while (currentDir !== path.dirname(currentDir)) {
    const candidatePaths = [
      path.join(currentDir, 'pmm.config.json'),
      path.join(currentDir, 'config', 'pmm', 'config.json')
    ];

    for (const candidate of candidatePaths) {
      try {
        const configContent = require('fs').readFileSync(candidate, 'utf8');
        const config = JSON.parse(configContent);
        const rootDir = path.dirname(path.dirname(path.dirname(candidate))) || currentDir;
        configCache = {
          productContextDir: path.resolve(rootDir, config.productContextDir),
          templatesDir: path.resolve(rootDir, config.templatesDir),
          blocksDir: path.resolve(rootDir, config.blocksDir),
          projectsDir: path.resolve(rootDir, config.projectsDir),
          promptsDir: path.resolve(rootDir, config.promptsDir)
        };
        return configCache;
      } catch {
        // try next candidate or move up a directory
      }
    }

    currentDir = path.dirname(currentDir);
  }
  
  throw new Error('pmm.config.json not found (looked for pmm.config.json and config/pmm/config.json)');
}

export async function ensureDir(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf8');
}

export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, 'utf8');
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
