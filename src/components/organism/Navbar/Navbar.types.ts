import type { NavIconId } from "./navbar.icons"

export interface NavbarItem {
  /**
   * Destino. Se espera un ancla interna con almohadilla ("#projects"): es
   * de donde el observador saca el `id` de la sección que tiene que vigilar
   * para encender el ítem. Un enlace externo funcionaría igual, pero nunca
   * se marcaría como activo.
   */
  href: string
  /** Rótulo que aparece bajo el icono cuando la lente se planta encima */
  label: string
  icon: NavIconId
}

export interface NavbarProps {
  items: NavbarItem[]
  className?: string
  /** Nombre del <nav> para lectores de pantalla */
  ariaLabel?: string
  /**
   * Ítem encendido al cargar, antes de que el observador diga la suya.
   * Por defecto el primero — que es el hero, o sea lo que se ve al entrar.
   */
  defaultIndex?: number
}
