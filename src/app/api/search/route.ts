import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Statically cached search index for static export / GitHub Pages
// See: https://fumadocs.dev/docs/headless/search/orama
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
