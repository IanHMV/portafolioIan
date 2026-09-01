import { useEffect, useLayoutEffect } from "react"

/**
 * `useLayoutEffect` en el navegador, `useEffect` al prerenderizar.
 *
 * Desde que el sitio se prerenderiza (ver src/main.tsx), los componentes se
 * renderizan también en Node, y ahí `useLayoutEffect` no puede correr: no hay
 * layout que medir. React lo avisa con un warning en cada build por cada
 * componente que lo use.
 *
 * En el servidor NINGÚN efecto se ejecuta, así que cambiar uno por otro no
 * altera lo que se pinta; solo calla el aviso. En el navegador se sigue
 * usando `useLayoutEffect`, que es lo que hace falta cuando la medida tiene
 * que estar hecha ANTES del primer pintado (el ancho del dock del Navbar, la
 * posición de salida de las esferas del footer): con `useEffect` el usuario
 * llega a ver el primer fotograma sin colocar.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect
