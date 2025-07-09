# ─── Build stage ───
FROM golang:1.24-alpine AS builder

# Enable modules, set a fixed GOPATH
ENV CGO_ENABLED=0 \
    GO111MODULE=on \
    GOPATH=/go

WORKDIR /go/src/app

# Copy module files, download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source, build statically
COPY . .
RUN go build -o server .



# ─── Final stage ──
FROM alpine:latest

WORKDIR /app

# Copy only the Go binary from builder
COPY --from=builder /go/src/app/server .

# Expose your app’s port (adjust if needed)
EXPOSE 8080

# Run the binary
ENTRYPOINT ["./server"]

