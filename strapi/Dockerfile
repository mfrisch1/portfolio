# Base image
FROM node:20-alpine

# Install dependencies for sharp (image processing library)
RUN apk add --no-cache \
		build-base \
		vips-dev \
		libpng-dev \
		zlib-dev \
		libc6-compat \
    python3 \
    make \
    g++ \
    git

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (Strapi CLI and project dep)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the admin panel (opt for prod)
RUN npm run build

# Expose Strapi's default port
EXPOSE 1337

# Start the strapi server
CMD ["npm", "run", "develop"]
