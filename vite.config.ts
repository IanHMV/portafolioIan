
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/*
 * Este archivo YA NO construye el sitio: de eso se encarga Next
 * (next.config.ts). Lo único que queda aquí es la configuración de Vitest,
 * que trae su propio Vite y necesita el plugin de React para compilar el JSX
 * de los tests. El plugin de Tailwind se fue con la migración — el CSS ahora
 * entra por postcss.config.mjs.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // en Vitest 4 los mínimos van dentro de `thresholds`; sueltos rompen `tsc -b`
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  }
});