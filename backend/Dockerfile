FROM node:22-alpine

# Install libvips-dev for sharp compatibility and pnpm
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    git && \
    corepack enable && corepack prepare pnpm@latest --activate

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN pnpm run build

EXPOSE 1337
CMD ["pnpm", "run", "develop"]

