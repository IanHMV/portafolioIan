import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./Navbar.module.css";
import type { NavbarProps } from "./Navbar.types";
import { NAV_ICONS } from "./navbar.icons";

/*
 * Banda de vigilancia del observador. Los dos números recortan la ventana
 * por arriba y por abajo hasta dejar una franja del 5% a la altura de los
 * ojos: la sección activa es la que cruza ESE punto, no la que asoma por el
 * borde inferior.
 *
 * Es la diferencia entre un menú que se enciende cuando ya estás leyendo
 * una sección y uno que se adelanta y parpadea entre dos cada vez que
 * asoma un título.
 */
const SPY_BAND = "-45% 0px -50% 0px";

const Navbar = ({
  items,
  ariaLabel = "Secciones del sitio",
  defaultIndex = 0,
  className = "",
}: NavbarProps) => {
  const [active, setActive] = useState(
    defaultIndex >= 0 && defaultIndex < items.length ? defaultIndex : 0
  );

  const dockRef = useRef<HTMLUListElement>(null);
  const slotRefs = useRef<(HTMLLIElement | null)[]>([]);

  /*
   * Lo único que el CSS no puede deducir solo: dónde empieza el ítem activo
   * y cuánto mide. `null` mientras no se ha medido — la lente se queda
   * invisible ese primer fotograma en vez de aparecer pegada al borde
   * izquierdo del dock.
   */
  const [box, setBox] = useState<{ x: number; w: number } | null>(null);

  /*
   * La medida va en `useLayoutEffect` y no en `useEffect` porque corre
   * ANTES de que el navegador pinte: al abrir la página la lente ya sale
   * colocada sobre el primer icono. Con `useEffect` se vería un fotograma
   * con la lente en el origen y luego un salto.
   *
   * Se mide con `getBoundingClientRect` en vez de `offsetLeft` para no
   * depender de quién sea el `offsetParent`: el dock lleva `position:
   * relative`, pero cualquier `filter` o `transform` que se añada mañana
   * por encima cambiaría esa referencia sin avisar.
   */
  useLayoutEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const measure = () => {
      const slot = slotRefs.current[active];
      if (!slot) return;
      const dockRect = dock.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      setBox({ x: slotRect.left - dockRect.left, w: slotRect.width });
    };

    measure();

    /*
     * El dock se estira con la ventana (--dock-item va en vw y cambia de
     * escalón en 48rem), así que al girar el teléfono los ítems se mueven.
     * Se vigila el dock y no la ventana: un `resize` no salta cuando lo que
     * cambia es el tamaño de letra del navegador, y eso también mueve las
     * medidas porque todo está en rem.
     */
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(dock);
    return () => observer.disconnect();
  }, [active, items.length]);

  /*
   * ── QUÉ SECCIÓN SE ESTÁ MIRANDO ──────────────────────────────────
   *
   * Con IntersectionObserver y no con un `scroll` + `getBoundingClientRect`
   * por ítem: el evento de scroll dispara decenas de veces por segundo y
   * cada medición fuerza al navegador a recalcular el layout en mitad del
   * desplazamiento, que es la receta clásica del scroll a tirones. El
   * observador solo avisa cuando una sección entra o sale de la franja.
   */
  useEffect(() => {
    const targets = items
      .map((item) =>
        item.href.startsWith("#")
          ? document.getElementById(item.href.slice(1))
          : null
      )
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    /*
     * El observador avisa de CAMBIOS, no del estado completo, así que hay
     * que llevar la cuenta de lo que sigue dentro de la franja. Cuando hay
     * dos (una sección corta entrando mientras la anterior sale) gana la
     * primera en orden del documento, que es la que el usuario acaba de
     * dejar arriba.
     */
    const inside = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inside.add(entry.target.id);
          else inside.delete(entry.target.id);
        }

        const current = targets.find((target) => inside.has(target.id));
        if (!current) return;

        const index = items.findIndex(
          (item) => item.href.slice(1) === current.id
        );
        if (index !== -1) setActive(index);
      },
      { rootMargin: SPY_BAND }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={ariaLabel} className={`${styles.navbar} ${className}`}>
      <ul
        ref={dockRef}
        className={styles.dock}
        /*
         * Las dos medidas viajan como custom properties y no como estilos
         * de la lente porque se heredan: la lente las lee desde su `calc`
         * junto con las que fija el CSS (--lens-over-x, --lens-min), y así
         * la aritmética de dónde va y cuánto mide vive entera en la hoja de
         * estilos, donde se puede ajustar por breakpoint.
         */
        style={
          {
            "--item-x": `${box?.x ?? 0}px`,
            "--item-w": `${box?.w ?? 0}px`,
          } as CSSProperties
        }
      >
        <li
          aria-hidden="true"
          className={styles.lens}
          data-ready={box ? "true" : "false"}
        />

        {items.map((item, index) => {
          const isActive = index === active;

          return (
            <li
              key={item.href}
              ref={(node) => {
                slotRefs.current[index] = node;
              }}
              className={styles.slot}
              data-active={isActive}
            >
              {/*
                Un <a> pelado y no el átomo LinkComponent: aquí hace falta
                interceptar el clic para encender el ítem en el mismo
                fotograma, sin esperar a que el scroll suave llegue a la
                sección y el observador se entere. LinkComponent no expone
                `onClick`.

                El salto lo sigue haciendo el navegador con el ancla, así
                que la URL guarda la sección y el enlace se puede abrir en
                otra pestaña como cualquier otro.
              */}
              <a
                href={item.href}
                className={styles.item}
                onClick={() => setActive(index)}
                aria-current={isActive ? "true" : undefined}
              >
                <svg
                  aria-hidden="true"
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {NAV_ICONS[item.icon].map((path) => (
                    <path key={path} d={path} />
                  ))}
                </svg>

                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
