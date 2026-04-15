import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { RootProvider } from "fumadocs-ui/provider/tanstack";
import "../global.css";

export const Route = createRootRoute({
	head: () => ({
		links: [
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		],
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "TaskTrace" },
			{
				name: "description",
				content:
					"Git-native developer worklog engine. Capture work, consolidate with AI agents, sync to task managers.",
			},
			{
				name: "keywords",
				content: "worklog,git,cli,mcp,clickup,developer-tools",
			},
			{ property: "og:title", content: "TaskTrace" },
			{
				property: "og:description",
				content:
					"Git-native developer worklog engine. Capture work, consolidate with AI agents, sync to task managers.",
			},
			{ property: "og:type", content: "website" },
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="flex min-h-screen flex-col">
				<RootProvider>
					<Outlet />
				</RootProvider>
				<Scripts />
			</body>
		</html>
	);
}
