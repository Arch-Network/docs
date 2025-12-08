// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { remarkMermaid } from "@theguild/remark-mermaid";
import rehypeComponents from "rehype-components";
import { z } from "zod";
var extendedFrontmatterSchema = frontmatterSchema.extend({
  layout: z.string().optional(),
  titleTemplate: z.string().optional(),
  hero: z.object({
    name: z.string().optional(),
    text: z.string().optional(),
    tagline: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    actions: z.array(z.object({
      theme: z.string(),
      text: z.string(),
      link: z.string()
    })).optional()
  }).optional(),
  features: z.array(z.object({
    title: z.string(),
    details: z.string(),
    link: z.string(),
    icon: z.string().optional()
  })).optional()
});
var docs = defineDocs({
  dir: "content",
  docs: {
    schema: extendedFrontmatterSchema
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
    rehypePlugins: [
      [
        rehypeComponents,
        {
          components: {
            DocImage: "@/components/doc-image",
            ConsensusImage: "@/components/consensus-image"
          }
        }
      ]
    ]
  }
});
export {
  source_config_default as default,
  docs
};
