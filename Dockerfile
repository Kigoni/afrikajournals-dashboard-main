FROM node:18

WORKDIR /app

COPY package*.json ./

# Ensure correct binary for SWC
ENV SWC_BINARY_TARGET=linux-x64-gnu

# Install dependencies cleanly and compatibly
RUN npm ci --legacy-peer-deps

# Copy rest of your project
COPY . .

# Optional: build step (if needed for Vite)
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server with Vite preview
CMD ["npm", "start"]
