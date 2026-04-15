import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "CLI First",
    description:
      "8 commands. Every command supports --json for scripting and AI agent pipelines.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
        />
      </svg>
    ),
    title: "MCP Native",
    description:
      "Claude Code and Cursor log work directly via MCP tools. No copy-paste, zero friction.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    title: "AI Optional",
    description:
      "Works perfectly without AI. Consolidation agents are multipliers, not requirements.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
    title: "Git-Integrated",
    description:
      "Post-commit hooks auto-capture context. Attach entries to commits with one command.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
    title: "ClickUp Sync",
    description:
      "Sync consolidated work entries to ClickUp tasks as structured comments automatically.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    title: "NDJSON Storage",
    description:
      "Append-only local files. No database. Grep-able, portable, version-controllable.",
  },
];

const steps = [
  {
    step: "01",
    title: "Capture",
    description:
      "Log events as you work — via CLI, git post-commit hook, or MCP tool from your AI agent.",
  },
  {
    step: "02",
    title: "Consolidate",
    description:
      "Merge raw events into clean work entries. Optionally let an AI agent polish the result.",
  },
  {
    step: "03",
    title: "Sync",
    description:
      "Attach entries to git commits and push them to ClickUp with a single command.",
  },
];

function HomePage() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-col">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center gap-6 overflow-hidden px-4 py-28 text-center">
          {/* subtle radial glow behind the hero */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--color-fd-primary) 15%, transparent), transparent)",
            }}
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted px-4 py-1.5 text-sm text-fd-muted-foreground">
            <span className="inline-block size-2 rounded-full bg-green-500" />
            Git-native worklog engine
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            Capture work.{" "}
            <span className="text-fd-primary">Consolidate.</span> Sync.
          </h1>
          <p className="max-w-xl text-balance text-lg text-fd-muted-foreground">
            TaskTrace sits between your git workflow and your task manager.
            Capture what you actually did, let AI agents consolidate messy notes
            into clean entries, and sync the result to ClickUp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/docs/cli"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-muted"
            >
              CLI Reference
            </Link>
          </div>
        </section>

        {/* ── Terminal demo ─────────────────────────────────────────── */}
        <section className="flex justify-center px-4 pb-24">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-fd-border bg-fd-muted/50 px-4 py-2.5">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-fd-muted-foreground">
                terminal — tasktrace demo
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
              <code className="text-fd-foreground">
                {`$ tt init
✔ Created .tasktracerc.json
✔ Installed post-commit hook

$ tt add -d "fixed auth timeout" -k bugfix
✔ Event captured  01JRZX...

$ tt add -d "updated refresh token logic" -k impl
✔ Event captured  01JRZY...

$ tt consolidate
✔ 2 events → 1 entry  "Fixed auth timeout and refresh token flow"

$ tt attach && tt sync
✔ Linked commit abc123def
✔ Synced to ClickUp CU-abc123`}
              </code>
            </pre>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                How it works
              </h2>
              <p className="mt-3 text-fd-muted-foreground">
                Three steps from raw notes to synced tasks.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6"
                >
                  <span className="text-5xl font-bold text-fd-primary/20">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-fd-muted-foreground">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────── */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Everything you need
              </h2>
              <p className="mt-3 text-fd-muted-foreground">
                Designed for developers who want visibility without ceremony.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:bg-fd-muted/30"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg border border-fd-border bg-fd-muted text-fd-muted-foreground">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-fd-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="border-t border-fd-border bg-fd-muted/30 px-4 py-24 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to start?
            </h2>
            <p className="mt-3 text-fd-muted-foreground">
              Install in seconds. Works with any git project.
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-fd-border bg-fd-card">
              <div className="flex items-center gap-1.5 border-b border-fd-border bg-fd-muted/50 px-4 py-2">
                <span className="text-xs text-fd-muted-foreground">bash</span>
              </div>
              <div className="px-5 py-3 text-left">
                <code className="text-sm text-fd-foreground">
                  bun add -g @tasktrace/cli
                </code>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/docs/installation"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                Installation Guide
              </Link>
              <Link
                to="/docs/mcp"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-muted"
              >
                MCP Server
              </Link>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
