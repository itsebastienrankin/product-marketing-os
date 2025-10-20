import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

export async function hasPandoc(): Promise<boolean> {
  try {
    await execAsync('pandoc --version');
    return true;
  } catch {
    return false;
  }
}

export async function convertToMd(inputPath: string): Promise<string> {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const outputPath = path.join(path.dirname(inputPath), `${baseName}.md`);
  
  if (ext === '.md' || ext === '.txt') {
    // Just copy
    await fs.copyFile(inputPath, outputPath);
    return outputPath;
  }
  
  if (ext === '.pdf') {
    // Copy unchanged
    await fs.copyFile(inputPath, outputPath);
    console.log(chalk.yellow(`⚠️  PDF copied as-is: ${outputPath}`));
    return outputPath;
  }
  
  if (ext === '.docx' || ext === '.pptx') {
    const hasPandocInstalled = await hasPandoc();
    if (hasPandocInstalled) {
      try {
        await execAsync(`pandoc "${inputPath}" -o "${outputPath}"`);
        console.log(chalk.green(`✓ Converted: ${inputPath} → ${outputPath}`));
        return outputPath;
      } catch (error) {
        console.log(chalk.red(`❌ Pandoc conversion failed: ${error}`));
        await fs.copyFile(inputPath, outputPath);
        return outputPath;
      }
    } else {
      console.log(chalk.yellow(`⚠️  Pandoc not found. Install with: brew install pandoc`));
      await fs.copyFile(inputPath, outputPath);
      return outputPath;
    }
  }
  
  // Unsupported format, copy as-is
  await fs.copyFile(inputPath, outputPath);
  return outputPath;
}
