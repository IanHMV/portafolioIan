import type { SocialOrbId } from "./socialOrbs.config"

export interface SocialOrbItem {
  id: SocialOrbId
  href: string
  /** Texto del aria-label y de la etiqueta que sale al pasar por encima. */
  label: string
}

/** Al menos una red; cada una es UNA esfera, sin repetir. */
export type SocialOrbItems = readonly [SocialOrbItem, ...SocialOrbItem[]]

export interface SocialOrbsProps {
  items: SocialOrbItems
  /**
   * Diámetro de cada esfera en px. Es un TOPE: si las esferas no caben en
   * el área, el componente las encoge hasta que quepan (ver `solveLayout`).
   */
  orbSize?: number
  /** Ancho máximo del área de juego en px. Nunca pasa del 100% del hueco. */
  width?: number
  /** Alto del área de juego en px. */
  height?: number
  /**
   * Cuánto impulso conserva una esfera de un fotograma al siguiente (0–1).
   * 1 = no se para nunca; 0.85 se frena en seco. El default (0.92) deja un
   * deslizamiento corto, como una canica sobre la mesa.
   */
  friction?: number
  /** Rebote contra las paredes y entre esferas (0 = se quedan pegadas). */
  bounce?: number
  /**
   * Pista bajo el área. El arrastre no se ve, hay que contarlo; `null` la
   * quita si el sitio ya lo explica en otro sitio.
   */
  hint?: string | null
  /** Abre los enlaces en una pestaña nueva. */
  newTab?: boolean
  /** Nombre accesible del grupo de enlaces. */
  ariaLabel?: string
  className?: string
}
