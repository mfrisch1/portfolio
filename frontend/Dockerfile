# Use Node 20 Alpine
FROM node:20-alpine

# Install pnpm via corepack
RUN apk add --no-cache libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy all code
COPY . .

# Expose dev port and start
EXPOSE 3000
CMD ["pnpm", "run", "dev"]

