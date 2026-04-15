# syntax=docker/dockerfile:1
# Build context: apps/docs/  (fly deploy --config apps/docs/fly.toml)

# ─── deps ────────────────────────────────────────────────────────────────────
FROM oven/bun:1-alpine AS deps
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# ─── builder ─────────────────────────────────────────────────────────────────
FROM deps AS builder
WORKDIR /app

COPY . .
RUN bun run build

# ─── runner ──────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
