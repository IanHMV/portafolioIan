import type { SocialRingId } from "./socialRing.config";

export interface SocialRingItem {
  id: SocialRingId;
  href: string;
  /** Texto del aria-label y de la etiqueta que sale en hover. */
  label: string;
}

/** Al menos una red; el anillo reparte las que haya en ángulos iguales. */
export type SocialRingItems = readonly [SocialRingItem, ...SocialRingItem[]];

export interface SocialRingProps {
  items: SocialRingItems;
  /** Diámetro del anillo (centro a centro de las insignias) en px. */
  size?: number;
  /** Diámetro de cada insignia en px. */
  badgeSize?: number;
  /**
   * Cuántas insignias dibujar como mínimo. La lista se repite hasta
   * alcanzar el número, que es lo que da al anillo su densidad: con 3 redes
   * y 9 insignias se ven tres vueltas del mismo trío. Los duplicados
   * enlazan al mismo sitio pero no existen para lectores de pantalla ni
   * para el tabulador (ver `SocialRing.tsx`).
   */
  minBadges?: number;
  /** Rota el reparto de insignias sin mover nada más, en grados. */
  startAngle?: number;
  /** Segundos que tarda una vuelta completa. 0 deja el anillo quieto. */
  spinDuration?: number;
  /** Gira en sentido antihorario. */
  reverse?: boolean;
  /** Abre los enlaces en una pestaña nueva. */
  newTab?: boolean;
  /** Nombre accesible del grupo de enlaces. */
  ariaLabel?: string;
  className?: string;
}
