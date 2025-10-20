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
  
  // Find repo root by looking for pmm.config.json
  let currentDir = __dirname;
  while (currentDir !== path.dirname(currentDir)) {
    const configPath = path.join(currentDir, 'pmm.config.json');
    try {
      const configContent = require('fs').readFileSync(configPath, 'utf8');
      const config = JSON.parse(configContent);
      configCache = {
        productContextDir: path.resolve(currentDir, config.productContextDir),
        templatesDir: path.resolve(currentDir, config.templatesDir),
        blocksDir: path.resolve(currentDir, config.blocksDir),
        projectsDir: path.resolve(currentDir, config.projectsDir),
        promptsDir: path.resolve(currentDir, config.promptsDir)
      };
      return configCache;
    } catch {
      currentDir = path.dirname(currentDir);
    }
  }
  
  throw new Error('pmm.config.json not found');
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
