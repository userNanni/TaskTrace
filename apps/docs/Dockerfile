# syntax=docker/dockerfile:1
# Build context: monorepo root
# Deploy: fly deploy --config apps/docs/fly.toml (from repo root)

# ─── deps ────────────────────────────────────────────────────────────────────
FROM oven/bun:1-alpine AS deps
WORKDIR /app

# Copy all workspace manifests so bun can resolve the full workspace graph
COPY package.json bun.lock ./
COPY apps/docs/package.json ./apps/docs/package.json
COPY packages/core/package.json ./packages/core/package.json
COPY packages/cli/package.json ./packages/cli/package.json
COPY packages/adapter-clickup/package.json ./packages/adapter-clickup/package.json
COPY packages/mcp-server/package.json ./packages/mcp-server/package.json

RUN bun install --frozen-lockfile

# ─── builder ─────────────────────────────────────────────────────────────────
FROM deps AS builder
WORKDIR /app

COPY . .
# Build only the docs package (no @tasktrace/* deps, so no cascade needed)
RUN bun run --filter @tasktrace/docs build

# ─── runner ──────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/apps/docs/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
