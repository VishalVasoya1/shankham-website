# ---- builder: compile TS + vite build ----
FROM node:22-alpine AS builder
WORKDIR /app

# copy only package files first for better caching
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# copy source & build
COPY . .
RUN npm run build

# ---- runtime: nginx serving dist on port 4006 ----
FROM nginx:alpine AS runtime
# remove default nginx config (optional)
RUN rm /etc/nginx/conf.d/default.conf

# copy custom nginx config that listens on 4006
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 4006

# run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]