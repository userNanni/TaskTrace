import { Outlet, createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/app/source";
import { baseOptions } from "@/app/layout.config";

export const Route = createFileRoute("/docs")({
  component: DocsLayoutRoute,
});

function DocsLayoutRoute() {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <Outlet />
    </DocsLayout>
  );
}
