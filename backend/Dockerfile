# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /opt/app

# Install global pnpm
RUN npm install -g pnpm

# Copy manifests
COPY package.json pnpm-lock.yaml ./

# Install dependencies (cached unless manifests change)
RUN pnpm install --frozen-lockfile

# Copy source code with correct permissions—no chown needed
COPY --chown=node:node . .

# Switch to non-root user
USER node

# Build admin panel
RUN pnpm build

# Expose port
EXPOSE 1337

# Dev mode with auto rebuild
CMD ["pnpm", "develop"]


