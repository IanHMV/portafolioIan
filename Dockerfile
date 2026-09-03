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

# `npm run build` = next build. Con `output: "export"` en next.config.ts esto
# no arranca ningún servidor: renderiza las rutas y escribe HTML plano en
# `out/`. Next hace el type-check dentro del build, así que un error de tipos
# sigue tumbando la imagen — a propósito: mejor aquí que en producción.
RUN npm run build

# ---------------------------------------------------------------------------
# Etapa 2 — runtime: nginx sirviendo los estáticos ya compilados.
# ---------------------------------------------------------------------------
FROM nginx:1-alpine AS runtime

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# `out/` es la carpeta que genera `output: "export"` (antes era `dist/`,
# de Vite). El runtime no cambia: nginx sirviendo ficheros estáticos.
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
