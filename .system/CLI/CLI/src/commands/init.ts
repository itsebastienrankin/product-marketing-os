import { cfg, ensureDir, projectSlug } from '../lib/config.js';
import chalk from 'chalk';

export async function initCommand(): Promise<void> {
  console.log(chalk.blue('🚀 Initializing Product Marketing OS...'));
  
  try {
    const config = cfg();
    
    // Create required directories
    await ensureDir(config.productContextDir);
    await ensureDir(config.projectsDir);
    await ensureDir(config.promptsDir);
    await ensureDir(config.blocksDir);
    
    console.log(chalk.green('✅ PMM OS initialized successfully!'));
    console.log(chalk.gray('Next steps:'));
    console.log(chalk.gray('  • Create a project: pmm new-project --name "My Project"'));
    console.log(chalk.gray('  • Drop files into Sources/Inbox/'));
    console.log(chalk.gray('  • Run: pmm ingest --project "My Project" --auto-structure'));
    
  } catch (error) {
    console.error(chalk.red('❌ Error initializing PMM OS:'), error);
    process.exit(1);
  }
}