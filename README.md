# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules (ver más abajo la sección de **Despliegue**):

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

# Despliegue con Docker + Nginx

El sitio es 100% estático: Vite compila a `dist/` y nginx sirve esos archivos.
Node solo existe durante el build, no en el contenedor final (~50 MB).

## Archivos

| Archivo | Para qué |
|---|---|
| `Dockerfile` | Build en 2 etapas: `node:22-alpine` compila, `nginx:1-alpine` sirve |
| `nginx/default.conf` | Fallback de la SPA, caché, gzip y cabeceras de seguridad |
| `docker-compose.yml` | Levantar el contenedor con un comando |
| `.dockerignore` | Lo que no se copia al contexto del build |

## Uso

Construir y levantar (queda en http://localhost:8080):

```bash
docker compose up -d --build
```

Ver logs, estado y apagar:

```bash
docker compose logs -f
```

```bash
docker compose ps
```

```bash
docker compose down
```

Sin compose:

```bash
docker build -t portafolio-ian . && docker run -d -p 8080:80 --name portafolio-ian portafolio-ian
```

## Desplegar en un servidor

1. Sube el repo (o haz `git pull` en el server). **`package-lock.json` tiene que estar versionado**: el Dockerfile usa `npm ci` y sin lockfile falla.
2. `docker compose up -d --build`.
3. Publica el puerto: si esta es la página principal y no hay nada más en el 80, cambia el mapeo a `"80:80"` en `docker-compose.yml`.

Para HTTPS lo normal es no tocar este contenedor y poner delante un proxy
inverso (Caddy, Traefik o un nginx del host) que termine el TLS con Let's
Encrypt y haga `proxy_pass` al `8080`. Así el certificado se renueva sin
reconstruir la imagen.

## Detalles que importan

- **Rutas de React**: `App.tsx` usa `BrowserRouter`. El `try_files $uri $uri/ /index.html` de `nginx/default.conf` es lo que evita el 404 al recargar en una ruta que no sea `/`.
- **Caché**: `/assets/*` lleva hash en el nombre → caché de 1 año. `index.html` va con `no-cache`, así un deploy se ve al instante.
- **El build falla si hay errores de tipos**: la imagen ejecuta `npm run build` (`tsc -b && vite build`). Si prefieres que un error de tipos no bloquee el deploy, cambia esa línea del `Dockerfile` por `RUN npx vite build`.
- **Subcarpeta en vez de raíz**: si algún día lo sirves en `midominio.com/portafolio`, hay que añadir `base: '/portafolio/'` en `vite.config.ts` **y** ajustar el `location` de nginx. Tal como está, el sitio asume que vive en `/`.
- **Sin CSP**: `index.html` carga Google Fonts y el kit de Font Awesome desde CDN; una `Content-Security-Policy` estricta los bloquearía. Está comentado en el conf por si quitas esos CDN.
