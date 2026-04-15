import { createFileRoute } from "@tanstack/react-router";
import { source } from "@/app/source";
import { DocsPageContent } from "@/app/components/docs-page";

export const Route = createFileRoute("/docs/")({
  component: DocsIndexPage,
  head: () => {
    const page = source.getPage([]);
    const data = page?.data as { title?: string; description?: string } | undefined;
    return {
      meta: [
        { title: `${data?.title ?? "Docs"} | TaskTrace` },
        ...(data?.description
          ? [{ name: "description", content: data.description }]
          : []),
      ],
    };
  },
});

function DocsIndexPage() {
  return <DocsPageContent slug={[]} />;
}
