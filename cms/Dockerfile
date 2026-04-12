# ─── Stage 1: Dependencies ────────────────────────────────────────
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# ─── Stage 2: Builder ────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts
RUN npm run build

# ─── Stage 3: Runner ─────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 payload

COPY --from=builder --chown=payload:nodejs /app/dist ./dist
COPY --from=builder --chown=payload:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER payload
EXPOSE 3001
ENV PORT=3001

CMD ["node", "dist/server.js"]
