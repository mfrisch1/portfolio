FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# 1. Copy package files and install production deps
COPY package.json package-lock.json ./

# 2. Install Strapi + Postgres driver
RUN npm ci \
  && npm install pg --save

# 3. Copy the rest of your Strapi app
COPY . .

# 4. (Optional) If you have a custom admin build step:
# RUN npm run build

EXPOSE 1337

# Start Strapi in dev mode
CMD ["npm", "run", "develop"]
