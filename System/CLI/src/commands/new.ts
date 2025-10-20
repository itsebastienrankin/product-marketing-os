import { Command } from 'commander';
import { ensureDir, writeFile, slugify } from '../lib/file-utils.js';
import chalk from 'chalk';

export async function newCommand(type: string, options: { name?: string; out?: string }): Promise<void> {
  const { name, out } = options;
  
  if (!name) {
    console.error(chalk.red('❌ Name is required. Use -n or --name to specify a name.'));
    process.exit(1);
  }
  
  const slug = slugify(name);
  const outputDir = out || `docs/${type}`;
  const filePath = `${outputDir}/${slug}/README.md`;
  
  console.log(chalk.blue(`📝 Creating new ${type} document: ${name}`));
  
  try {
    await ensureDir(`${outputDir}/${slug}`);
    
    const content = `# ${name}

<!-- TODO: Add your ${type} content here -->

## Overview

<!-- Describe the ${type} here -->

## Key Points

<!-- Add key points specific to this ${type} -->

## Next Steps

<!-- Define next steps or actions -->
`;
    
    await writeFile(filePath, content);
    
    console.log(chalk.green(`✅ Created ${type} document: ${filePath}`));
    console.log(chalk.gray(`Edit the file to add your ${type} content.`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error creating document:'), error);
    process.exit(1);
  }
}
