import type { CSSProperties } from "react";

import { SOCIAL_RING_BRANDS } from "./socialRing.config";
import type {
  SocialRingItems,
  SocialRingItem,
  SocialRingProps,
} from "./SocialRing.types";
import styles from "./SocialRing.module.css";

/** Permite pasar custom properties dentro de `style` sin castear a `any`. */
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

/** Enlaces que no deben abrirse en pestaña nueva (mailto:, tel:, anclas). */
const SAME_TAB_PROTOCOL = /^(mailto:|tel:|#)/;

const cx = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");

interface RingBadge {
  item: SocialRingItem;
  /**
   * Primera vuelta de la lista. Solo estas insignias existen para el
   * lector de pantalla y el tabulador; las copias son decorado.
   */
  primary: boolean;
  /** Posición en el anillo, en grados desde las 12. */
  angle: number;
  /** Clave estable: el mismo id aparece varias veces. */
  key: string;
}

/**
 * Reparte las insignias en ángulos iguales, repitiendo la lista hasta
 * llegar a `minBadges`.
 *
 * La repetición es lo que hace que un portafolio con tres redes tenga un
 * anillo tan poblado como el de la referencia. Se resuelve como una
 * marquesina: TODAS las copias son enlaces reales —hacer clic en cualquiera
 * lleva al mismo sitio, que es lo que espera quien la ve girar— pero las
 * copias van con `aria-hidden` y fuera del orden de tabulación, así que en
 * el árbol de accesibilidad solo hay tres enlaces, no nueve repetidos.
 */
const toBadges = (
  items: SocialRingItems,
  minBadges: number,
  startAngle: number,
): readonly RingBadge[] => {
  const laps = Math.max(1, Math.ceil(minBadges / items.length));
  const total = items.length * laps;
  const step = 360 / total;

  return Array.from({ length: total }, (_, index) => ({
    item: items[index % items.length],
    primary: index < items.length,
    angle: startAngle + index * step,
    key: `${items[index % items.length].id}-${index}`,
  }));
};

export const SocialRing = ({
  items,
  size = 340,
  badgeSize = 76,
  minBadges = 9,
  startAngle = 0,
  spinDuration = 42,
  reverse = false,
  newTab = true,
  ariaLabel = "Redes sociales",
  className,
}: SocialRingProps) => {
  const spinning = spinDuration > 0;

  const ringStyle: CSSVars = {
    /* Diámetro EFECTIVO: en pantallas angostas el anillo pedido no cabe, y
       medir todo contra --d hace que se encoja solo sin tocar nada desde
       React. Igual la insignia, que baja con él para no comerse el hueco. */
    "--size": `${size}px`,
    "--badge": `${badgeSize}px`,
    "--spin": `${spinDuration}s`,
    "--dir": reverse ? "reverse" : "normal",
    /* el contra-giro del icono tiene que ir al revés que el anillo */
    "--dirBack": reverse ? "normal" : "reverse",
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={cx(styles.stage, className)}
      style={ringStyle}
    >
      {/* Círculo guía: sin él las insignias flotan sueltas y no se lee que
          están sobre una órbita. Va detrás de todo y no recibe puntero. */}
      <span aria-hidden className={styles.orbit} />

      <div className={cx(styles.ring, spinning && styles.ringSpin)}>
        {toBadges(items, minBadges, startAngle).map(
          ({ item, primary, angle, key }) => {
            const brand = SOCIAL_RING_BRANDS[item.id];
            const external = newTab && !SAME_TAB_PROTOCOL.test(item.href);
            const badgeStyle: CSSVars = {
              "--angle": `${angle}deg`,
              "--brandFace": brand.brandFace ?? brand.brand,
            };

            return (
              <a
                aria-hidden={primary ? undefined : true}
                aria-label={primary ? item.label : undefined}
                className={styles.badge}
                href={item.href}
                key={key}
                rel={external ? "noopener noreferrer" : undefined}
                style={badgeStyle}
                tabIndex={primary ? undefined : -1}
                target={external ? "_blank" : undefined}
              >
                {/* Deshace el giro del anillo para que el icono y la
                    etiqueta miren siempre de frente. Misma duración que el
                    anillo y en sentido contrario: arrancan a la vez, así
                    que no se descompensan. */}
                <span
                  className={cx(styles.upright, spinning && styles.uprightSpin)}
                >
                  <svg aria-hidden className={styles.icon} viewBox="0 0 24 24">
                    <path d={brand.path} />
                  </svg>

                  <span aria-hidden className={styles.tag}>
                    {item.label}
                  </span>
                </span>
              </a>
            );
          },
        )}
      </div>
    </nav>
  );
};

export type {
  SocialRingItem,
  SocialRingItems,
  SocialRingProps,
} from "./SocialRing.types";
