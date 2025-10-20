import { promises as fs } from 'fs';
import path from 'path';
import { cfg, projectSlug, ensureDir, writeFile } from '../lib/config.js';
import { convertToMd } from '../lib/pandoc.js';
import { combineMarkdownFiles } from '../lib/combiner.js';
import { structureAll } from '../lib/structurer.js';
import chalk from 'chalk';

export async function ingestCommand(options: { 
  project?: string; 
  autoStructure?: boolean; 
  combine?: boolean; 
  convert?: boolean 
}): Promise<void> {
  const { project, autoStructure = true, combine = true, convert = true } = options;
  
  if (!project) {
    console.error(chalk.red('❌ Project name is required. Use -p or --project to specify a project.'));
    process.exit(1);
  }
  
  const slug = projectSlug(project);
  const config = cfg();
  const inboxDir = `${config.projectsDir}/${slug}/Sources/Inbox`;
  const sourcesDir = `${config.projectsDir}/${slug}/Sources`;
  const compiledPath = `${sourcesDir}/_compiled-context.md`;
  
  console.log(chalk.blue(`📥 Ingesting project: ${project}`));
  
  try {
    // Check if inbox exists
    try {
      await fs.access(inboxDir);
    } catch {
      console.error(chalk.red(`❌ Inbox directory not found: ${inboxDir}`));
      console.error(chalk.gray('Create project first: pmm new-project --name "Project Name"'));
      process.exit(1);
    }
    
    // Get all files from inbox
    const files = await fs.readdir(inboxDir);
    const filePaths = files.map(file => path.join(inboxDir, file));
    
    if (filePaths.length === 0) {
      console.log(chalk.yellow('⚠️  No files found in inbox'));
      return;
    }
    
    console.log(chalk.gray(`Found ${filePaths.length} files in inbox`));
    
    let processedFiles: string[] = [];
    
    if (convert) {
      // Convert files to Markdown
      for (const filePath of filePaths) {
        const convertedPath = await convertToMd(filePath);
        const fileName = path.basename(convertedPath);
        const targetPath = path.join(sourcesDir, fileName);
        
        // Copy to sources directory
        await fs.copyFile(convertedPath, targetPath);
        processedFiles.push(targetPath);
        
        console.log(chalk.green(`✓ Processed: ${path.basename(filePath)}`));
      }
    } else {
      // Just copy files
      for (const filePath of filePaths) {
        const fileName = path.basename(filePath);
        const targetPath = path.join(sourcesDir, fileName);
        await fs.copyFile(filePath, targetPath);
        processedFiles.push(targetPath);
      }
    }
    
    if (combine) {
      // Combine all Markdown files
      const mdFiles = processedFiles.filter(file => file.endsWith('.md'));
      if (mdFiles.length > 0) {
        await combineMarkdownFiles(mdFiles, compiledPath);
      } else {
        console.log(chalk.yellow('⚠️  No Markdown files to combine'));
      }
    }
    
    if (autoStructure) {
      // Auto-structure content
      if (await fs.access(compiledPath).then(() => true).catch(() => false)) {
        const compiledContent = await fs.readFile(compiledPath, 'utf8');
        await structureAll(compiledContent);
        console.log(chalk.green('✅ Auto-structured all product context files'));
      } else {
        console.log(chalk.yellow('⚠️  No compiled context file found for auto-structuring'));
      }
    }
    
    console.log(chalk.green(`✅ Ingest complete for project: ${project}`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error during ingest:'), error);
    process.exit(1);
  }
}
