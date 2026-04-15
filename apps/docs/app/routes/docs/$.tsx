import { DocsPageContent } from "@/app/components/docs-page";
import { source } from "@/app/source";
import { createFileRoute } from "@tanstack/react-router";

function slugFromSplat(splat: string | undefined): string[] {
	return splat?.split("/").filter(Boolean) ?? [];
}

export const Route = createFileRoute("/docs/$")({
	component: DocsSplatPage,
	head: ({ params }) => {
		const slug = slugFromSplat(params._splat);
		const page = source.getPage(slug);
		if (!page) return { meta: [{ title: "Not Found | TaskTrace" }] };
		const data = page.data as { title?: string; description?: string };
		return {
			meta: [
				{ title: `${data.title} | TaskTrace` },
				...(data.description ? [{ name: "description", content: data.description }] : []),
			],
		};
	},
});

function DocsSplatPage() {
	const { _splat } = Route.useParams();
	return <DocsPageContent slug={slugFromSplat(_splat)} />;
}
