import { promises as fs } from 'fs';
import path from 'path';
import { cfg, projectSlug, ensureDir, writeFile, readFile } from '../lib/config.js';
import chalk from 'chalk';

export async function publishCommand(options: { project?: string; path?: string }): Promise<void> {
  const { project, path: docPath } = options;
  
  if (!project) {
    console.error(chalk.red('❌ Project name is required. Use -p or --project to specify a project.'));
    process.exit(1);
  }
  
  if (!docPath) {
    console.error(chalk.red('❌ Path is required. Use --path to specify the document path.'));
    process.exit(1);
  }
  
  const slug = projectSlug(project);
  const config = cfg();
  const projectDir = `${config.projectsDir}/${slug}`;
  
  console.log(chalk.blue(`📤 Publishing document: ${docPath}`));
  
  try {
    // Read the document
    const content = await readFile(docPath);
    
    // Create final path
    const relativePath = docPath.replace(`${projectDir}/Drafts/`, '');
    const finalPath = `${projectDir}/Final/${relativePath}`;
    
    // Add header
    const timestamp = new Date().toISOString().split('T')[0];
    const header = `> Status: Final • Date: ${timestamp} • Source: ${docPath.split('/').pop()}\n\n`;
    
    // Write to final
    await ensureDir(path.dirname(finalPath));
    await writeFile(finalPath, header + content);
    
    console.log(chalk.green(`✅ Published document: ${finalPath}`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error publishing document:'), error);
    process.exit(1);
  }
}
