import { promises as fs } from 'fs';
import { cfg, projectSlug, writeFile } from '../lib/config.js';
import { structureAll, structureOne } from '../lib/structurer.js';
import chalk from 'chalk';

export async function regenerateCommand(options: { 
  project?: string; 
  type?: string; 
  all?: boolean 
}): Promise<void> {
  const { project, type, all = false } = options;
  
  if (!project) {
    console.error(chalk.red('❌ Project name is required. Use -p or --project to specify a project.'));
    process.exit(1);
  }
  
  const slug = projectSlug(project);
  const config = cfg();
  const compiledPath = `${config.projectsDir}/${slug}/Sources/_compiled-context.md`;
  
  console.log(chalk.blue(`🔄 Regenerating context for project: ${project}`));
  
  try {
    // Check if compiled context exists
    try {
      await fs.access(compiledPath);
    } catch {
      console.error(chalk.red(`❌ Compiled context not found: ${compiledPath}`));
      console.error(chalk.gray('Run ingest first: pmm ingest --project "Project Name" --auto-structure'));
      process.exit(1);
    }
    
    const compiledContent = await fs.readFile(compiledPath, 'utf8');
    
    if (all) {
      // Regenerate all context types
      await structureAll(compiledContent);
      console.log(chalk.green('✅ Regenerated all product context files'));
    } else if (type) {
      // Regenerate specific type
      const structured = await structureOne(type as any, compiledContent);
      const outputPath = `${config.productContextDir}/${type}-template.md`;
      await writeFile(outputPath, structured);
      console.log(chalk.green(`✅ Regenerated ${type}: ${outputPath}`));
    } else {
      console.error(chalk.red('❌ Specify --type or --all'));
      process.exit(1);
    }
    
  } catch (error) {
    console.error(chalk.red('❌ Error during regenerate:'), error);
    process.exit(1);
  }
}
