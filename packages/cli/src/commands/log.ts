import type { EntryFilter, EventFilter, WorklogEngine } from "@tasktrace/core";
import { defineCommand } from "citty";
import pc from "picocolors";
import { createEngine } from "../utils/engine.js";
import { formatEntry, formatEvent } from "../utils/output.js";

export const logCommand = defineCommand({
	meta: {
		name: "log",
		description: "List worklog entries (or events)",
	},
	args: {
		events: {
			type: "boolean",
			description: "Show raw events instead of entries",
			default: false,
		},
		branch: {
			type: "string",
			description: "Filter by branch",
		},
		taskRef: {
			type: "string",
			alias: "r",
			description: "Filter by task reference",
		},
		since: {
			type: "string",
			description: "Filter since date (ISO format)",
		},
		limit: {
			type: "string",
			alias: "n",
			description: "Limit results",
			default: "20",
		},
		json: {
			type: "boolean",
			description: "Output as JSON",
			default: false,
		},
	},
	async run({ args }) {
		const engine = await createEngine();
		const limit = Number.parseInt(args.limit, 10);
		const filter = {
			branch: args.branch ?? undefined,
			taskRef: args.taskRef ?? undefined,
			since: args.since ?? undefined,
			limit,
		};

		if (args.events) {
			await printEvents(engine, filter, args.json);
		} else {
			await printEntries(engine, filter, args.json);
		}
	},
});

async function printEvents(
	engine: WorklogEngine,
	filter: EventFilter,
	json: boolean,
): Promise<void> {
	const events = await engine.listEvents(filter);

	if (json) {
		console.log(JSON.stringify(events, null, 2));
		return;
	}

	if (events.length === 0) {
		console.log(pc.dim("No events found."));
		return;
	}

	console.log(pc.bold(`Events (${events.length}):`));
	console.log("");
	for (const event of events) {
		console.log(`  ${formatEvent(event)}`);
	}
}

async function printEntries(
	engine: WorklogEngine,
	filter: EntryFilter,
	json: boolean,
): Promise<void> {
	const entries = await engine.listEntries(filter);

	if (json) {
		console.log(JSON.stringify(entries, null, 2));
		return;
	}

	if (entries.length === 0) {
		console.log(pc.dim("No entries found. Run 'tt consolidate' to create entries from events."));
		return;
	}

	console.log(pc.bold(`Entries (${entries.length}):`));
	console.log("");
	for (const entry of entries) {
		console.log(`  ${formatEntry(entry)}`);
	}
}
