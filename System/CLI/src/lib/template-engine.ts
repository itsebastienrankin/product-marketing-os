import Handlebars from 'handlebars';
import { promises as fs } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { readFile } from './file-utils.js';

export interface TemplateData {
  [key: string]: any;
}

export async function loadData(filePath: string): Promise<TemplateData> {
  const content = await readFile(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext === '.json') {
    return JSON.parse(content);
  } else if (ext === '.yml' || ext === '.yaml') {
    return yaml.load(content) as TemplateData;
  } else {
    throw new Error(`Unsupported data file format: ${ext}`);
  }
}

export async function loadTemplate(templatePath: string): Promise<HandlebarsTemplateDelegate> {
  const templateContent = await readFile(templatePath);
  return Handlebars.compile(templateContent);
}

export async function loadPartials(partialsDir: string): Promise<void> {
  try {
    const files = await fs.readdir(partialsDir);
    
    for (const file of files) {
      if (file.endsWith('.hbs')) {
        const partialName = path.basename(file, '.hbs');
        const partialPath = path.join(partialsDir, file);
        const partialContent = await readFile(partialPath);
        Handlebars.registerPartial(partialName, partialContent);
      }
    }
  } catch (error) {
    // Partials directory doesn't exist or is empty - that's okay
    console.log('No partials found, continuing without them');
  }
}

export function renderTemplate(template: HandlebarsTemplateDelegate, data: TemplateData): string {
  return template(data);
}
