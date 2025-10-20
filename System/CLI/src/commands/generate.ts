import { promises as fs } from 'fs';
import path from 'path';
import { cfg, projectSlug, ensureDir, writeFile, readFile } from '../lib/config.js';
import Handlebars from 'handlebars';
import chalk from 'chalk';

export async function generateCommand(options: { 
  project?: string; 
  type?: string; 
  name?: string; 
  template?: string; 
  sources?: string 
}): Promise<void> {
  const { project, type = 'positioning', name, template = 'positioning-template.hbs', sources } = options;
  
  if (!project) {
    console.error(chalk.red('❌ Project name is required. Use -p or --project to specify a project.'));
    process.exit(1);
  }
  
  if (!name) {
    console.error(chalk.red('❌ Name is required. Use -n or --name to specify a name.'));
    process.exit(1);
  }
  
  const slug = projectSlug(project);
  const config = cfg();
  const projectDir = `${config.projectsDir}/${slug}`;
  const outputDir = `${projectDir}/Drafts/${type}`;
  const outputPath = `${outputDir}/${projectSlug(name)}/README.md`;
  
  console.log(chalk.blue(`🔧 Generating ${type} document: ${name}`));
  
  try {
    // Load template
    const templatePath = `${config.templatesDir}/${template}`;
    let templateContent: string;
    
    try {
      templateContent = await readFile(templatePath);
    } catch {
      // Try .md extension
      const mdTemplatePath = `${config.templatesDir}/${template.replace('.hbs', '.md')}`;
      templateContent = await readFile(mdTemplatePath);
    }
    
    // Load sources if provided
    let data: any = {};
    if (sources) {
      try {
        const sourcesContent = await readFile(sources);
        // Simple data extraction - in production, this would be more sophisticated
        data = { content: sourcesContent };
      } catch (error) {
        console.log(chalk.yellow(`⚠️  Could not load sources: ${sources}`));
      }
    }
    
    // Compile template
    const compiledTemplate = Handlebars.compile(templateContent);
    const rendered = compiledTemplate(data);
    
    // Write output
    await ensureDir(path.dirname(outputPath));
    await writeFile(outputPath, rendered);
    
    console.log(chalk.green(`✅ Generated document: ${outputPath}`));
    
  } catch (error) {
    console.error(chalk.red('❌ Error generating document:'), error);
    process.exit(1);
  }
}