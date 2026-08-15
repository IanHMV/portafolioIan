import type { CSSProperties } from "react";

import { SOCIAL_DIAL_BRANDS, type SocialDialId } from "./socialDial.config";
import styles from "./SocialDial.module.css";

/** Permite pasar custom properties dentro de `style` sin castear a `any`. */
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

const DEG = Math.PI / 180;

/** Un vértice cada ~24° deja el arco liso sin inflar el polígono. */
const MAX_SEGMENT_DEG = 24;

/** Enlaces que no deben abrirse en pestaña nueva (mailto:, tel:, anclas). */
const SAME_TAB_PROTOCOL = /^(mailto:|tel:|#)/;

const cx = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");

export interface SocialDialItem {
  id: SocialDialId;
  href: string;
  /** Texto del aria-label y de la etiqueta flotante. */
  label: string;
}

/**
 * Al menos una red. El disco se reparte en tantas porciones como items haya:
 * 3 items = 3 porciones de 120°, 5 items = 5 de 72°, etc.
 */
export type SocialDialItems = readonly [SocialDialItem, ...SocialDialItem[]];

interface DialSlice {
  item: SocialDialItem;
  /** Bisectriz del sector como vector unitario (eje Y hacia abajo, como CSS). */
  dx: number;
  dy: number;
  /** Recorte del sector; `none` cuando hay una sola red (disco completo). */
  clip: string;
}

/**
 * Recorta un sector circular. El polígono solo define los dos cortes rectos:
 * el arco exterior lo dibuja el `border-radius: 50%` de la porción, así que
 * los vértices se colocan MÁS lejos que el radio (50%) para que ninguna
 * cuerda del polígono se coma el borde redondeado.
 */
const sectorClip = (fromDeg: number, sweepDeg: number): string => {
  const segments = Math.max(2, Math.ceil(sweepDeg / MAX_SEGMENT_DEG));
  const stepDeg = sweepDeg / segments;
  const reach = (50 / Math.cos((stepDeg / 2) * DEG)) * 1.05;

  const points = ["50% 50%"];
  for (let i = 0; i <= segments; i += 1) {
    const angle = (fromDeg + i * stepDeg) * DEG;
    const x = 50 + reach * Math.cos(angle);
    const y = 50 + reach * Math.sin(angle);
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${points.join(", ")})`;
};

/**
 * Reparte los items en sectores iguales. El primer corte sale a las 12 en el
 * plano del disco (antes de aplicar `spin`), así que con 4 items caen los
 * mismos cuadrantes de siempre.
 */
const toSlices = (
  items: SocialDialItems,
  startAngle: number,
): readonly DialSlice[] => {
  const sweep = 360 / items.length;
  /* Con una sola porción no hay bisectriz útil: el sector es el disco entero,
     así que ni se separa del centro ni se desplaza el icono. */
  const single = items.length === 1;

  return items.map((item, index) => {
    const from = -90 + startAngle + index * sweep;
    const mid = (from + sweep / 2) * DEG;

    return {
      item,
      dx: single ? 0 : Math.cos(mid),
      dy: single ? 0 : Math.sin(mid),
      clip: single ? "none" : sectorClip(from, sweep),
    };
  });
};

export interface SocialDialProps {
  items: SocialDialItems;
  /** Diámetro del disco en px. */
  size?: number;
  /** Inclinación isométrica en grados (0 = frontal, 52 = por defecto). */
  tilt?: number;
  /** Giro del pastel sobre su propio plano, en grados. */
  spin?: number;
  /** Rota el reparto de porciones sin mover el disco, en grados. */
  startAngle?: number;
  /** Grosor extruido de cada porción en px (1 capa = 1px). */
  thickness?: number;
  /** Cuánto se eleva la porción en hover/focus, en px. */
  rise?: number;
  /** Cuánto se separa la porción del centro en hover, en px. */
  push?: number;
  /** Distancia del icono al centro, como fracción del radio (0 = centro). */
  iconRadius?: number;
  /** Desactiva la animación de flotado. */
  floating?: boolean;
  /** Abre los enlaces en una pestaña nueva. */
  newTab?: boolean;
  /** Nombre accesible del grupo de enlaces. */
  ariaLabel?: string;
  className?: string;
}

export const SocialDial = ({
  items,
  size = 260,
  tilt = 52,
  spin = 45,
  startAngle = 0,
  thickness = 16,
  rise = 38,
  push = 20,
  iconRadius = 0.62,
  floating = true,
  newTab = true,
  ariaLabel = "Redes sociales",
  className,
}: SocialDialProps) => {
  const layerCount = Math.min(40, Math.max(4, Math.round(thickness)));
  const layers = Array.from({ length: layerCount }, (_, i) => i + 1);

  const stageStyle: CSSVars = {
    "--size": `${size}px`,
    "--tilt": `${tilt}deg`,
    "--spin": `${spin}deg`,
    "--thick": `${thickness}px`,
    "--rise": `${rise}px`,
    "--push": `${push}px`,
    /* el CSS multiplica por --d (diámetro), de ahí la mitad */
    "--iconPos": iconRadius / 2,
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={cx(styles.stage, className)}
      style={stageStyle}
    >
      <div className={styles.scene}>
        <span
          aria-hidden
          className={cx(styles.ground, floating && styles.groundOn)}
        />

        <div className={cx(styles.float, floating && styles.floatOn)}>
          <span aria-hidden className={styles.base}>
            <span className={cx(styles.ring, styles.ringA)} />
            <span className={cx(styles.ring, styles.ringB)} />
          </span>

          <div className={styles.pie}>
            {toSlices(items, startAngle).map(({ item, dx, dy, clip }) => {
              const brand = SOCIAL_DIAL_BRANDS[item.id];
              const external = newTab && !SAME_TAB_PROTOCOL.test(item.href);
              const sliceStyle: CSSVars = {
                "--dx": dx.toFixed(4),
                "--dy": dy.toFixed(4),
                "--clip": clip,
                "--brand": brand.brand,
                "--brandFace": brand.brandFace ?? brand.brand,
                "--edge": brand.edge,
                "--edgeHover": brand.edgeHover,
                "--face": "#fff",
              };

              return (
                <a
                  aria-label={item.label}
                  className={styles.slice}
                  href={item.href}
                  key={item.id}
                  rel={external ? "noopener noreferrer" : undefined}
                  style={sliceStyle}
                  target={external ? "_blank" : undefined}
                >
                  {layers.map((i) => (
                    <span
                      aria-hidden
                      className={styles.layer}
                      key={i}
                      style={{ "--i": i } as CSSVars}
                    />
                  ))}

                  <span className={styles.face}>
                    <svg aria-hidden className={styles.icon} viewBox="0 0 24 24">
                      <path d={brand.path} />
                    </svg>
                  </span>

                  <span aria-hidden className={styles.tag}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
