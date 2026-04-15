import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/health")({
	GET: () => {
		return new Response(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	},
});
