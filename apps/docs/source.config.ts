import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkAdmonition } from "fumadocs-core/mdx-plugins";
import { rehypeCode } from "fumadocs-core/mdx-plugins";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkAdmonition],
    rehypePlugins: [[rehypeCode, { themes: { light: "github-light", dark: "github-dark" } }]],
  },
});
