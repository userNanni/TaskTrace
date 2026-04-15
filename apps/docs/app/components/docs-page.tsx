import { source } from "@/app/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { TableOfContents } from "fumadocs-core/server";
import type { MDXContent } from "mdx/types";

interface PageData {
  title: string;
  description?: string;
  full?: boolean;
  body: MDXContent;
  toc: TableOfContents;
}

export function DocsPageContent({ slug }: { slug: string[] }) {
  const page = source.getPage(slug);

  if (!page) {
    return (
      <DocsPage>
        <DocsTitle>Not Found</DocsTitle>
        <DocsDescription>
          The requested documentation page could not be found.
        </DocsDescription>
      </DocsPage>
    );
  }

  const data = page.data as unknown as PageData;
  const MDX = data.body;

  return (
    <DocsPage
      toc={data.toc}
      full={data.full}
      tableOfContent={{ style: "clerk" }}
      editOnGithub={{
        repo: "tasktrace",
        owner: "your-org",
        sha: "main",
        path: `apps/docs/content/docs/${page.file.path}`,
      }}
    >
      <DocsTitle>{data.title}</DocsTitle>
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}
