import type { CSSProperties } from "react";

import { SOCIAL_DIAL_BRANDS, type SocialDialId } from "./socialDial.config";
import styles from "./SocialDial.module.css";

/** Permite pasar custom properties dentro de `style` sin castear a `any`. */
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

/** Las 4 posiciones del pastel: arriba-izq, arriba-der, abajo-der, abajo-izq. */
const SLICE_POSITIONS = ["tl", "tr", "br", "bl"] as const;

type SlicePosition = (typeof SLICE_POSITIONS)[number];

const cx = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");

export interface SocialDialItem {
  id: SocialDialId;
  href: string;
  /** Texto del aria-label y de la etiqueta flotante. */
  label: string;
}

/** Exactamente 4 items: el pastel tiene 4 porciones. */
export type SocialDialItems = readonly [
  SocialDialItem,
  SocialDialItem,
  SocialDialItem,
  SocialDialItem,
];

/** Empareja cada item con su porción usando índices literales (type-safe). */
const toSlices = (
  items: SocialDialItems,
): ReadonlyArray<{ item: SocialDialItem; position: SlicePosition }> => [
    { item: items[0], position: "tl" },
    { item: items[1], position: "tr" },
    { item: items[2], position: "br" },
    { item: items[3], position: "bl" },
  ];

export interface SocialDialProps {
  items: SocialDialItems;
  /** Diámetro del disco en px. */
  size?: number;
  /** Inclinación isométrica en grados (0 = frontal, 52 = por defecto). */
  tilt?: number;
  /** Giro del pastel sobre su propio plano, en grados. */
  spin?: number;
  /** Grosor extruido de cada porción en px (1 capa = 1px). */
  thickness?: number;
  /** Cuánto se eleva la porción en hover/focus, en px. */
  rise?: number;
  /** Cuánto se separa la porción del centro en hover, en px. */
  push?: number;
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
  thickness = 16,
  rise = 38,
  push = 20,
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
            {toSlices(items).map(({ item, position }) => {
              const brand = SOCIAL_DIAL_BRANDS[item.id];
              const sliceStyle: CSSVars = {
                "--brand": brand.brand,
                "--brandFace": brand.brandFace ?? brand.brand,
                "--edge": brand.edge,
                "--edgeHover": brand.edgeHover,
                "--face": "#fff",
              };

              return (
                <a
                  aria-label={item.label}
                  className={cx(styles.slice, styles[position])}
                  href={item.href}
                  key={item.id}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  style={sliceStyle}
                  target={newTab ? "_blank" : undefined}
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