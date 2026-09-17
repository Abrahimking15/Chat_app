# ============================================================
# Stage 1 — Build the frontend (Vite + React)
# ============================================================
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy only the files needed to install dependencies first (better caching)
COPY frontend/package*.json ./
RUN npm ci

# Copy the rest of the frontend source
COPY frontend/ ./

# Build-time environment variable for Clerk
ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

# Build the React app → outputs to frontend/dist/
RUN npm run build


# ============================================================
# Stage 2 — Build the backend (plain JS Express)
# ============================================================
FROM node:20-alpine AS backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm ci

# Copy backend source
COPY backend/ ./

# "Build" step just copies src → dist (as described)
RUN npm run build


# ============================================================
# Stage 3 — Final runtime image (the only one that ships)
# ============================================================
FROM node:20-alpine AS runtime

WORKDIR /app

# Install only production dependencies for the backend
COPY backend/package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy the built backend code
COPY --from=backend-builder /app/backend/dist ./dist

# Copy the built frontend files into the public folder
# (this is the key move that lets one Express server serve both)
COPY --from=frontend-builder /app/frontend/dist ./public

# Expose the port your Express app listens on
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]