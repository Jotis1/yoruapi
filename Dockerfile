FROM oven/bun
WORKDIR /app
COPY . .
RUN bun install

ARG PORT
EXPOSE ${PORT:-4000}

CMD ["bun", "src/index.ts"]
