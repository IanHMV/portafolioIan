/*
 * GUARDADO PARA REUSO — ahora mismo no se monta en ningún sitio.
 *
 * Era el fondo del hero antes de pasar al globo 3D (./WireGlobe.tsx): una
 * rejilla polar plana que giraba sobre sí misma. Se conserva entera por si
 * hace falta en otra sección; para usarla basta importarla y pasarle una
 * clase que la posicione y le dé color.
 */

interface PolarGridProps {
  className?: string;
  /** Radios que salen del centro */
  spokes?: number;
  /** Anillos concéntricos */
  rings?: number;
}

const SIZE = 200;
const CENTER = SIZE / 2;
const RADIUS = CENTER;

/*
 * Rejilla polar: anillos concéntricos cruzados por radios, como el papel
 * milimetrado circular. Se dibuja en SVG y no en canvas a propósito:
 *
 * - Son ~35 elementos estáticos; girarlos es una sola transformación CSS que
 *   corre en el compositor, sin JavaScript por frame.
 * - `vector-effect: non-scaling-stroke` mantiene el grosor de línea
 *   constante por muy grande que se escale el SVG, así las líneas quedan
 *   finas como en la referencia en vez de engordar con el tamaño.
 *
 * El color sale de `currentColor`, así que se controla desde el CSS con la
 * propiedad `color` del contenedor.
 */
const PolarGrid = ({ className = "", spokes = 24, rings = 9 }: PolarGridProps) => {
  const radii = Array.from(
    { length: rings },
    (_, i) => (RADIUS * (i + 1)) / rings,
  );

  const ends = Array.from({ length: spokes }, (_, i) => {
    const angle = (Math.PI * 2 * i) / spokes;
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    };
  });

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {radii.map((r) => (
          <circle key={r} cx={CENTER} cy={CENTER} r={r} vectorEffect="non-scaling-stroke" />
        ))}

        {ends.map((end, i) => (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={end.x}
            y2={end.y}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  );
};

export default PolarGrid;
