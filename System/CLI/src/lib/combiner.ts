import { readFile, writeFile } from './config.js';
import chalk from 'chalk';

export async function combineMarkdownFiles(files: string[], outPath: string): Promise<void> {
  let combined = '';
  
  for (const file of files) {
    const content = await readFile(file);
    const fileName = file.split('/').pop() || file;
    
    combined += `\n\n---\n# FILE: ${fileName}\n---\n\n${content}`;
  }
  
  await writeFile(outPath, combined.trim());
  console.log(chalk.green(`✓ Combined ${files.length} files into: ${outPath}`));
}
