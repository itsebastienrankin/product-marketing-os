import { readFile, writeFile, cfg } from './config.js';
import chalk from 'chalk';

const TEMPLATE_TYPES = [
  'positioning',
  'messaging', 
  'personas',
  'segments',
  'verticals',
  'competitive',
  'battlecards'
] as const;

type TemplateType = typeof TEMPLATE_TYPES[number];

export async function structureAll(compiledMd: string): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  
  for (const type of TEMPLATE_TYPES) {
    console.log(chalk.blue(`🔧 Structuring ${type}...`));
    const structured = await structureOne(type, compiledMd);
    results[type] = structured;
    
    // Write to product context
    const outputPath = `${cfg().productContextDir}/${type}-template.md`;
    await writeFile(outputPath, structured);
    console.log(chalk.green(`✓ Written: ${outputPath}`));
  }
  
  return results;
}

export async function structureOne(type: TemplateType, compiledMd: string): Promise<string> {
  const template = await getTemplate(type);
  return await runAIPrompt({ compiledMd, type, template });
}

async function getTemplate(type: TemplateType): Promise<string> {
  const templatePath = `${cfg().templatesDir}/${type}-template.hbs`;
  
  try {
    return await readFile(templatePath);
  } catch {
    // Fallback to static templates
    return getStaticTemplate(type);
  }
}

function getStaticTemplate(type: TemplateType): string {
  const templates: Record<TemplateType, string> = {
    positioning: `# {{product.name}} Positioning

## The Category
{{product.category}}

## The Problem
{{product.problem}}

## The Solution
{{product.solution}}

## The Unique Value Proposition
{{product.uniqueValue}}

## The Target Customer
{{product.targetCustomer}}

## The Competitive Alternatives
{{#each product.competitiveAlternatives}}
- **{{this.name}}**: {{this.description}}
{{/each}}

## The Unique Attributes
{{#each product.uniqueAttributes}}
- **{{this.attribute}}**: {{this.description}}
{{/each}}

## The Proof Points
{{#each product.proofPoints}}
- {{this}}
{{/each}}

## The Clear Value Test
**For {{product.targetCustomer}} who {{product.problem}}, {{product.name}} is the {{product.category}} that {{product.uniqueValue}} unlike {{product.competitiveAlternatives.0.name}}.**

## Key Messages
{{#each product.keyMessages}}
- {{this}}
{{/each}}

## Positioning Statement
{{product.positioningStatement}}`,

    personas: `# {{persona.name}} Persona

## Overview
{{persona.overview}}

## Demographics
{{#each persona.demographics}}
- **{{@key}}**: {{this}}
{{/each}}

## Professional Background
- **Role**: {{persona.role}}
- **Industry**: {{persona.industry}}
- **Company Size**: {{persona.companySize}}
- **Experience Level**: {{persona.experienceLevel}}

## Goals & Objectives
{{#each persona.goals}}
- {{this}}
{{/each}}

## Challenges & Pain Points
{{#each persona.challenges}}
- **{{this.challenge}}**: {{this.description}}
  - *Impact*: {{this.impact}}
{{/each}}

## Information Sources
{{#each persona.informationSources}}
- {{this}}
{{/each}}

## Technology Stack
{{#each persona.technologyStack}}
- {{this}}
{{/each}}

## Buying Process
{{#each persona.buyingProcess}}
- **{{this.stage}}**: {{this.description}}
{{/each}}

## Messaging & Positioning
### Primary Message
{{persona.primaryMessage}}

### Supporting Messages
{{#each persona.supportingMessages}}
- {{this}}
{{/each}}

### Objections & Concerns
{{#each persona.objections}}
- **{{this.objection}}**: {{this.response}}
{{/each}}

## Content Preferences
{{#each persona.contentPreferences}}
- {{this}}
{{/each}}`,

    segments: `# {{segment.name}} Segment Brief

## Ideal Customer Profile (ICP)
### Demographics
{{#each segment.demographics}}
- **{{@key}}**: {{this}}
{{/each}}

### Firmographics
{{#each segment.firmographics}}
- **{{@key}}**: {{this}}
{{/each}}

## Jobs to be Done (JTBD)
{{#each segment.jobsToBeDone}}
- **{{this.job}}**: {{this.description}}
{{/each}}

## Pain Points
{{#each segment.painPoints}}
- **{{this.pain}}**: {{this.description}}
  - *Impact*: {{this.impact}}
  - *Current workaround*: {{this.workaround}}
{{/each}}

## Current Alternatives
{{#each segment.currentAlternatives}}
- **{{this.name}}**: {{this.description}}
  - *Why they use it*: {{this.reason}}
  - *What's missing*: {{this.gaps}}
{{/each}}

## Triggers
{{#each segment.triggers}}
- {{this}}
{{/each}}

## Value Propositions
{{#each segment.valuePropositions}}
- **{{this.benefit}}**: {{this.description}}
{{/each}}

## Proof Points
{{#each segment.proofPoints}}
- {{this}}
{{/each}}

## Risks & Objections
{{#each segment.risks}}
- **{{this.risk}}**: {{this.description}}
  - *Mitigation*: {{this.mitigation}}
{{/each}}`,

    verticals: `# {{vertical.name}} Vertical

## Overview
{{vertical.overview}}

## Market Characteristics
{{#each vertical.marketCharacteristics}}
- **{{this.characteristic}}**: {{this.description}}
{{/each}}

## Key Players
{{#each vertical.keyPlayers}}
- **{{this.player}}**: {{this.description}}
{{/each}}

## Regulatory Environment
{{#each vertical.regulations}}
- {{this}}
{{/each}}

## Technology Adoption
{{#each vertical.technologyAdoption}}
- **{{this.technology}}**: {{this.description}}
{{/each}}

## Buying Process
{{#each vertical.buyingProcess}}
- **{{this.stage}}**: {{this.description}}
{{/each}}

## Success Metrics
{{#each vertical.successMetrics}}
- **{{this.metric}}**: {{this.description}}
{{/each}}

## Competitive Landscape
{{#each vertical.competitors}}
- **{{this.competitor}}**: {{this.description}}
{{/each}}

## Opportunities
{{#each vertical.opportunities}}
- {{this}}
{{/each}}`,

    messaging: `# {{framework.name}} Messaging Framework

## Core Message
{{framework.coreMessage}}

## Value Propositions
{{#each framework.valuePropositions}}
- **{{this.proposition}}**: {{this.description}}
{{/each}}

## Proof Points
{{#each framework.proofPoints}}
- {{this}}
{{/each}}

## Tone & Voice
{{#each framework.toneVoice}}
- **{{this.aspect}}**: {{this.description}}
{{/each}}

## Key Messages by Audience
{{#each framework.audienceMessages}}
- **{{this.audience}}**: {{this.message}}
{{/each}}

## Content Pillars
{{#each framework.contentPillars}}
- **{{this.pillar}}**: {{this.description}}
{{/each}}

## Call-to-Action Framework
{{#each framework.ctaFramework}}
- **{{this.context}}**: {{this.cta}}
{{/each}}`,

    competitive: `# {{insight.name}} Competitive Insights

## Competitive Landscape
{{#each insight.competitors}}
- **{{this.competitor}}**: {{this.description}}
{{/each}}

## Positioning Analysis
{{#each insight.positioning}}
- **{{this.competitor}}**: {{this.positioning}}
{{/each}}

## Strengths & Weaknesses
{{#each insight.strengthsWeaknesses}}
- **{{this.competitor}}**:
  - *Strengths*: {{this.strengths}}
  - *Weaknesses*: {{this.weaknesses}}
{{/each}}

## Pricing Analysis
{{#each insight.pricing}}
- **{{this.competitor}}**: {{this.pricing}}
{{/each}}

## Feature Comparison
{{#each insight.features}}
- **{{this.feature}}**: {{this.comparison}}
{{/each}}

## Market Share
{{#each insight.marketShare}}
- **{{this.competitor}}**: {{this.share}}
{{/each}}

## Opportunities
{{#each insight.opportunities}}
- {{this}}
{{/each}}`,

    battlecards: `# {{battlecard.name}} Battle Card

## How We Win
{{#each battlecard.howWeWin}}
- {{this}}
{{/each}}

## Landmines
{{#each battlecard.landmines}}
- **{{this.landmine}}**: {{this.description}}
{{/each}}

## Objection Handling
{{#each battlecard.objections}}
- **{{this.objection}}**: {{this.response}}
{{/each}}

## Trap Questions
{{#each battlecard.trapQuestions}}
- **{{this.question}}**: {{this.purpose}}
{{/each}}

## Competitive Advantages
{{#each battlecard.advantages}}
- **{{this.advantage}}**: {{this.description}}
{{/each}}

## Proof Points
{{#each battlecard.proofPoints}}
- {{this}}
{{/each}}

## Key Messages
{{#each battlecard.keyMessages}}
- {{this}}
{{/each}}`
  };
  
  return templates[type];
}

async function runAIPrompt({ compiledMd, type, template }: { compiledMd: string; type: TemplateType; template: string }): Promise<string> {
  // This is a placeholder for AI integration
  // In a real implementation, this would call an AI service
  // For now, we'll return a structured template with placeholders
  
  const systemPrompt = `You are an expert product marketing systems builder. Given a combined Markdown corpus of product materials, extract and structure the information into clean, unambiguous Markdown that matches ONE of the target templates precisely. Use only facts present or strongly implied by the corpus; if uncertain, write 'TBD'. Keep outputs succinct and scannable. Do not invent customer names, metrics, or quotes.`;

  const userPrompt = `TARGET: ${type}
TEMPLATES: Use the following Markdown structure EXACTLY for the target:

<<<TEMPLATE>>>
${template}
<<<END TEMPLATE>>>

CORPUS (combined product materials below):
<<<CORPUS>>>
${compiledMd}
<<<END CORPUS>>>

INSTRUCTIONS:
- Fill every section that can reasonably be supported. Use 'TBD' for unknowns.
- Preserve headings and tables exactly as in the template.
- Avoid marketing fluff; prefer concrete, decision-useful statements.
- Output ONLY the final Markdown for the target template — no preamble, no analysis.`;

  // For now, return a structured version of the template with TBD placeholders
  // In production, this would call an AI service like OpenAI, Anthropic, etc.
  return template.replace(/\{\{[^}]+\}\}/g, 'TBD');
}
