import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const page = defineCollection({
	// Load Markdown and MDX files in the `src/content/pages/` directory.
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			updatedDate: z.coerce.date().optional(),
		}),
});

export const collections = { page };
