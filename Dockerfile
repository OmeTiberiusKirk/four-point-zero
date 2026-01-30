# ---------- Base ----------
FROM node:24.13-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile

# ---------- Build ----------
FROM base AS build
COPY package.json pnpm-lock.yaml ./
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN pnpm build

# ---------- Runner ----------
FROM node:24.13-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# non-root
USER node

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
