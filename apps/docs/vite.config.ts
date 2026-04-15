import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import mdx from "fumadocs-mdx/vite";
import { defineConfig } from "vite";
import * as sourceConfig from "./source.config";

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		tanstackStart({
			srcDirectory: "app",
		}),
		tailwindcss(),
		mdx(sourceConfig),
	],
});
