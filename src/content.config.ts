import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one MDX file in src/content/projects/.
// To add a project, copy an existing file and fill in the frontmatter + body.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                 // business-language headline
      subtitle: z.string(),              // methods / one-liner shown under the title
      year: z.string(),
      // categories drive the filter chips on the Work page
      categories: z.array(
        z.enum(['product', 'operations', 'simulation', 'ai', 'risk'])
      ),
      role: z.string(),
      collaborators: z.string().optional(),
      tools: z.array(z.string()),
      businessProblem: z.string(),       // one sentence, shown on cards
      // headline impact metric for the card
      impactValue: z.string(),
      impactLabel: z.string(),
      impactPlaceholder: z.boolean().default(false), // renders in amber "to verify"
      featured: z.boolean().default(false),
      order: z.number().default(99),     // controls display order (lower = first)
      confidentialityNote: z.string().optional(),
      coverImage: image().optional(),
      projectUrl: z.string().url().optional(),
      repositoryUrl: z.string().url().optional(),
      hasCaseStudy: z.boolean().default(true),
    }),
});

export const collections = { projects };
