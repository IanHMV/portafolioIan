# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Etapa 1 — build: compila el bundle de Vite.
# Node solo vive aquí; la imagen final no lleva ni node ni node_modules.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /app

# `playwright` es devDependency de los tests y su postinstall se baja ~500 MB
# de navegadores. Aquí no se ejecuta ningún test, así que sobra.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Primero solo el manifiesto: mientras no cambien las dependencias, Docker
# reutiliza esta capa y se salta el `npm ci` entero.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# `npm run build` = tsc -b && vite build: si hay un error de tipos, la imagen
# no se construye. Es a propósito — mejor que falle aquí que en producción.
RUN npm run build

# ---------------------------------------------------------------------------
# Etapa 2 — runtime: nginx sirviendo los estáticos ya compilados.
# ---------------------------------------------------------------------------
FROM nginx:1-alpine AS runtime

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
