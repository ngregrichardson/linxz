FROM oven/bun:latest as base
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production


FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/.next .next
COPY --from=prerelease /app/migrations migrations
COPY --from=prerelease /app/public public
COPY --from=prerelease /app/package.json .
COPY --from=prerelease /app/next.config.mjs .

RUN chown -R bun:bun /app

USER bun
EXPOSE 3000
ENTRYPOINT ["bun", "start"]