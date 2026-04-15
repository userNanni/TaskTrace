// Type stub for @tanstack/react-start/api which is not yet included in the
// installed package version. Remove once the package exports this module.
declare module "@tanstack/react-start/api" {
	export function createAPIFileRoute(
		path: string,
	): (config: Record<string, () => Response | Promise<Response>>) => unknown;
}
