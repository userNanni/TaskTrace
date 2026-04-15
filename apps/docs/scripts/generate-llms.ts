/**
 * Build-time script to generate /llms.txt and /llms-full.txt static files.
 * Run after the fumadocs-mdx Vite plugin generates .source/ files.
 *
 * Usage: bun scripts/generate-llms.ts
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://tasktrace.dev";
const outDir = resolve(import.meta.dirname, "../public");

mkdirSync(outDir, { recursive: true });

// --- llms.txt ---
const llmsLines = [
  "# TaskTrace Documentation",
  "",
  "> Git-native developer worklog engine. Capture work, consolidate with AI agents, sync to task managers.",
  "",
  "## Overview",
  "",
  "TaskTrace is a monorepo with four packages:",
  "- `@tasktrace/core` — engine, types, NDJSON storage, git integration, consolidation",
  "- `@tasktrace/cli` — `tt` / `tasktrace` CLI commands (Citty framework)",
  "- `@tasktrace/adapter-clickup` — ClickUp sync adapter",
  "- `@tasktrace/mcp-server` — MCP server for AI agents (stdio transport)",
  "",
  "Data flows: WorklogEvent (raw) → WorklogEntry (consolidated) → SyncState (synced).",
  "Storage: NDJSON append-only files + JSON for sync-state. IDs: ULID. Validation: Zod.",
  "",
  "## Quick Reference",
  "",
  "### CLI Commands",
  "- `tt init` — scaffold config, storage dir, git hooks",
  "- `tt add -d '...' -k bugfix` — capture a work event",
  "- `tt log` — list consolidated entries",
  "- `tt status` — summary dashboard",
  "- `tt consolidate` — group pending events into entries",
  "- `tt attach [sha]` — link commit to latest entry",
  "- `tt plan` — preview sync payload (dry-run)",
  "- `tt sync` — execute sync to task provider",
  "",
  "### MCP Tools (for AI agents)",
  "- `worklog_add` — add a worklog event",
  "- `worklog_consolidate` — group events into entries",
  "- `worklog_attach_commit` — link commit SHA to entry",
  "- `worklog_log` — list entries with filters",
  "- `worklog_status` — project worklog summary",
  "",
  "### MCP Resources",
  "- `tasktrace://config` — current configuration",
  "- `tasktrace://worklogs/recent` — last 10 entries",
  "",
  `## Full Content`,
  "",
  `Complete concatenated documentation: ${BASE_URL}/llms-full.txt`,
];

writeFileSync(resolve(outDir, "llms.txt"), llmsLines.join("\n"), "utf-8");
console.log("✔ Generated public/llms.txt");

// --- llms-full.txt ---
const fullLines = [
  "# TaskTrace — Full Documentation",
  "",
  "> Git-native developer worklog engine. Capture work, consolidate with AI agents, sync to task managers.",
  "",
  `This file contains the TaskTrace documentation index, optimized for LLM ingestion.`,
  `Source: ${BASE_URL}/docs | Index: ${BASE_URL}/llms.txt`,
  "",
  "---",
  "",
];

writeFileSync(resolve(outDir, "llms-full.txt"), fullLines.join("\n"), "utf-8");
console.log("✔ Generated public/llms-full.txt");
