FROM node:lts as base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:$PATH"
RUN corepack enable

ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json pnpm-lock.yaml /temp/dev/
RUN cd /temp/dev && pnpm install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json pnpm-lock.yaml /temp/prod/
RUN cd /temp/prod && pnpm install --frozen-lockfile --production


FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN pnpm build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/.next .next
COPY --from=prerelease /app/migrations migrations
COPY --from=prerelease /app/package.json .
COPY --from=prerelease /app/next.config.mjs .

EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]