import { cfg, ensureDir, projectSlug } from '../lib/config.js';
import chalk from 'chalk';

export async function newProjectCommand(options: { name?: string }): Promise<void> {
  const { name } = options;
  
  if (!name) {
    console.error(chalk.red('❌ Name is required. Use -n or --name to specify a name.'));
    process.exit(1);
  }
  
  const slug = projectSlug(name);
  const config = cfg();
  const projectDir = `${config.projectsDir}/${slug}`;
  
  console.log(chalk.blue(`📁 Creating project: ${name}`));
  
  try {
    // Create project structure
    await ensureDir(`${projectDir}/Sources/Inbox`);
    await ensureDir(`${projectDir}/Sources`);
    await ensureDir(`${projectDir}/Drafts`);
    await ensureDir(`${projectDir}/Final`);
    
    console.log(chalk.green(`✅ Created project: ${projectDir}`));
    console.log(chalk.gray('Next steps:'));
    console.log(chalk.gray(`  • Drop files into: ${projectDir}/Sources/Inbox/`));
    console.log(chalk.gray(`  • Run: pmm ingest --project "${name}" --auto-structure`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error creating project:'), error);
    process.exit(1);
  }
}
