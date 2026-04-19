import { createFileRoute } from "@tanstack/react-router"

// 90% of 512MB (fly.toml vm.memory) — triggers restart before OOM
const MEMORY_LIMIT_BYTES = 460 * 1024 * 1024

export const Route = createFileRoute("/healthz")({
	loader: async () => {
		const mem = process.memoryUsage()
		const rss = mem.rss
		const rss_mb = Math.round(rss / 1024 / 1024)

		if (rss > MEMORY_LIMIT_BYTES) {
			throw new Response(
				JSON.stringify({
					status: "unhealthy",
					service: "tasktrace-docs",
					reason: "memory_pressure",
					rss_mb,
					limit_mb: 460,
				}),
				{
					status: 503,
					headers: { "Content-Type": "application/json" },
				},
			)
		}

		return { status: "ok", service: "tasktrace-docs", rss_mb }
	},
	component: HealthCheck,
})

function HealthCheck() {
	const data = Route.useLoaderData()
	return <div>OK — {data.rss_mb}MB</div>
}
