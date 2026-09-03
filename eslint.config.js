// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  /* Todo esto lo genera el build y no se edita a mano: `.next` es la
     caché de Next, `out` el sitio exportado y `storybook-static` el
     Storybook compilado. Sin ignorarlos, eslint analizaba bundles de
     30.000 líneas y sacaba cientos de avisos de código ajeno. */
  globalIgnores(['dist', '.next', 'out', 'storybook-static', 'next-env.d.ts']),
  {
  files: ['**/*.{ts,tsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.recommended,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react-hooks/exhaustive-deps": "warn",
    "indent": ["warn", 2]
  }
}, ...storybook.configs["flat/recommended"],
  /* Va el ÚLTIMO a propósito: en la configuración plana gana el bloque más
     tardío que case con el archivo, así que puesto antes lo pisaba el bloque
     general de arriba.

     Los archivos de ruta de Next exportan `metadata` (y `generateMetadata`,
     `viewport`...) junto al componente: es su API, no un descuido. La regla
     de react-refresh viene del mundo Vite y aquí solo da falsos positivos. */
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
])
