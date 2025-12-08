import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ConsensusImage } from '@/components/consensus-image';
import { DocImage } from '@/components/doc-image';

// Custom Tip component without icon and border
function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 px-4 py-3 text-sm">
      {children}
    </div>
  );
}

// Custom Warning component without icon and border
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 px-4 py-3 text-sm">
      {children}
    </div>
  );
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tip,
    Warning,
    ConsensusImage,
    DocImage,
    ...components,
  } as MDXComponents;
}
