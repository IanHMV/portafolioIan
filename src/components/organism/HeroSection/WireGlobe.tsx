import type { CSSProperties } from "react";

import styles from "./WireGlobe.module.css";

type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

interface WireGlobeProps {
  className?: string;
  /** Líneas de longitud (circunferencias que pasan por los polos) */
  meridians?: number;
  /** Líneas de latitud a cada lado del ecuador; el total es 2n + 1 */
  parallelsPerHemisphere?: number;
}

const DEG = Math.PI / 180;

/** Latitud máxima que se dibuja: pegado al polo tan() se dispara. */
const MAX_LATITUDE = 70;

/*
 * Globo de alambre en 3D. Toma el color de `currentColor`, así que quien lo
 * monta decide el tono desde el CSS; aquí solo vive la geometría.
 */
const WireGlobe = ({
  className = "",
  meridians = 8,
  parallelsPerHemisphere = 3,
}: WireGlobeProps) => {
  /* Repartidos en media vuelta: de 180° en adelante se repetirían, porque
     una circunferencia girada 190° se ve igual que girada 10°. */
  const meridianAngles = Array.from(
    { length: meridians },
    (_, i) => (180 * i) / meridians,
  );

  /* Ecuador + n paralelos hacia cada polo */
  const latitudes = Array.from(
    { length: parallelsPerHemisphere * 2 + 1 },
    (_, i) => {
      const step = MAX_LATITUDE / parallelsPerHemisphere;
      return (i - parallelsPerHemisphere) * step;
    },
  );

  return (
    <div className={`${styles.globe} ${className}`}>
      {meridianAngles.map((angle) => (
        <span
          key={`m${angle}`}
          className={styles.meridian}
          style={{ "--angle": `${angle}deg` } as CSSVars}
        />
      ))}

      {latitudes.map((lat) => {
        const rad = lat * DEG;
        return (
          <span
            key={`p${lat}`}
            className={styles.parallel}
            style={
              {
                /* radio del paralelo = radio del globo * cos(latitud) */
                "--size": `${(Math.cos(rad) * 100).toFixed(3)}%`,
                "--tan": Math.tan(rad).toFixed(4),
              } as CSSVars
            }
          />
        );
      })}
    </div>
  );
};

export default WireGlobe;
