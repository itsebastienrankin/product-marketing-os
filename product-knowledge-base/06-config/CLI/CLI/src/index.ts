#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { newProjectCommand } from './commands/new-project.js';
import { ingestCommand } from './commands/ingest.js';
import { generateCommand } from './commands/generate.js';
import { publishCommand } from './commands/publish.js';
import { regenerateCommand } from './commands/regenerate.js';

const program = new Command();

program
  .name('pmm')
  .description('Product Marketing OS CLI')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize PMM OS structure')
  .action(initCommand);

program
  .command('new-project')
  .description('Create a new project')
  .option('-n, --name <name>', 'Name for the project')
  .action(newProjectCommand);

program
  .command('ingest')
  .description('Ingest and process project materials')
  .option('-p, --project <name>', 'Project name')
  .option('--auto-structure', 'Automatically structure content', true)
  .option('--combine', 'Combine files into single context', true)
  .option('--convert', 'Convert files to Markdown', true)
  .action(ingestCommand);

program
  .command('generate')
  .description('Generate document from template and data')
  .option('-p, --project <name>', 'Project name')
  .option('-t, --type <type>', 'Document type')
  .option('-n, --name <name>', 'Name for the document')
  .option('--template <template>', 'Template file')
  .option('--sources <sources>', 'Source files')
  .action(generateCommand);

program
  .command('publish')
  .description('Publish document to final')
  .option('-p, --project <name>', 'Project name')
  .option('--path <path>', 'Path to document')
  .action(publishCommand);

program
  .command('regenerate')
  .description('Regenerate product context files')
  .option('-p, --project <name>', 'Project name')
  .option('-t, --type <type>', 'Context type to regenerate')
  .option('--all', 'Regenerate all context types')
  .action(regenerateCommand);

program.parse();