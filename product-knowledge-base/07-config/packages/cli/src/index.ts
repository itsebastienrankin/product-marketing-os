#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { newCommand } from './commands/new.js';
import { generateCommand } from './commands/generate.js';

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
  .command('new <type>')
  .description('Create a new document of specified type')
  .option('-n, --name <name>', 'Name for the document')
  .option('-o, --out <dir>', 'Output directory')
  .action(newCommand);

program
  .command('generate <type>')
  .description('Generate document from template and data')
  .option('-D, --data <file>', 'Data file (YAML/JSON)')
  .option('-n, --name <name>', 'Name for the document')
  .option('-o, --out <dir>', 'Output directory')
  .option('-t, --template <template>', 'Specific template file')
  .action(generateCommand);

program.parse();
