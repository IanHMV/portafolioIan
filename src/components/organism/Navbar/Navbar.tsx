"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import styles from "./Navbar.module.css";
import type { NavbarProps } from "./Navbar.types";
import { NAV_ICONS } from "./navbar.icons";
import type { NavIconId } from "./navbar.icons";

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

/*
 * El mismo corte que usa la hoja de estilos para cambiar de hamburguesa a
 * dock, y que el resto del sitio llama `md`. Aquí hace falta porque el JS
 * tiene que enterarse de UNA cosa que el CSS no puede arreglar solo: si el
 * menú se queda abierto y la ventana crece hasta escritorio, el panel
 * desaparece por CSS pero el estado seguiría en "abierto", y al volver a
 * móvil reaparecería sin que nadie lo haya pedido.
 *
 * Va en rem, igual que el media query: las unidades rem de una consulta de
 * medios se miden siempre contra el tamaño de letra INICIAL del navegador,
 * así que los dos cortes caen exactamente en el mismo punto incluso para
 * quien haya subido la letra por accesibilidad.
 */
const DESKTOP_QUERY = "(min-width: 48rem)";

/* El mismo dibujo sirve para el dock y para el panel de móvil: entre los
   dos solo cambia el tamaño, y eso lo pone la clase. */
const NavIcon = ({ id, className }: { id: NavIconId; className: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {NAV_ICONS[id].map((path) => (
      <path key={path} d={path} />
    ))}
  </svg>
);

const Navbar = ({
  items,
  ariaLabel = "Secciones del sitio",
  defaultIndex = 0,
  openMenuLabel = "Abrir menú",
  closeMenuLabel = "Cerrar menú",
  className = "",
}: NavbarProps) => {
  const [active, setActive] = useState(
    defaultIndex >= 0 && defaultIndex < items.length ? defaultIndex : 0
  );

  /* Solo tiene sentido por debajo de 48rem: de ahí para arriba el botón y
     el panel están en `display: none` y quien manda es el dock. */
  const [open, setOpen] = useState(false);

  const dockRef = useRef<HTMLUListElement>(null);
  const slotRefs = useRef<(HTMLLIElement | null)[]>([]);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  /* El botón anuncia con `aria-controls` QUÉ abre, así que el panel
     necesita un id propio y estable aunque haya dos navbars en la misma
     página (la del sitio y la de una historia de Storybook, por ejemplo). */
  const sheetId = useId();

  /*
   * Lo único que el CSS no puede deducir solo: dónde empieza el ítem activo
   * y cuánto mide. `null` mientras no se ha medido — la lente se queda
   * invisible ese primer fotograma en vez de aparecer pegada al borde
   * izquierdo del dock.
   */
  const [box, setBox] = useState<{ x: number; w: number } | null>(null);

  /*
   * Cerrar es lo que más veces se hace y desde más sitios (el aspa, el
   * velo, Escape, un enlace del panel), así que vive en una sola función.
   *
   * `restoreFocus` existe porque no todos los cierres son iguales: con
   * Escape o con el velo hay que devolver el foco al botón —si no, se
   * queda posado en un enlace que acaba de volverse `inert` y el siguiente
   * tabulador empezaría desde el principio del documento—, pero al pulsar
   * un enlace NO: ahí manda el salto del ancla, y robarle el foco al
   * destino dejaría al teclado navegando otra vez desde la esquina.
   */
  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) burgerRef.current?.focus();
  }, []);

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
     *
     * De paso resuelve gratis el caso del móvil: allí el dock está en
     * `display: none` y mide 0x0, así que la medida sale a cero; cuando la
     * ventana cruza a escritorio y reaparece, el observador salta con ese
     * cambio de tamaño y la lente se coloca sola.
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
   *
   * Lo que decide vale para los dos sitios: enciende el ítem del dock en
   * escritorio y el del panel en móvil, así que al abrir la hamburguesa ya
   * sale marcado dónde estás.
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

  /*
   * ── ESCAPE ───────────────────────────────────────────────────────
   *
   * Colgado de `document` y no del <nav>: el foco puede acabar fuera del
   * menú (un clic en el velo lo deja en el <body>) y allí un manejador del
   * nav ya no vería la tecla. Solo se engancha mientras está abierto, así
   * que no queda un oyente global escuchando de por vida.
   */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  /*
   * Al abrir, el foco entra en el panel. No se queda en el botón a
   * propósito: quien navega con teclado o con lector de pantalla acaba de
   * pedir el menú, y lo que espera después de abrirlo es estar DENTRO, no
   * tener que tabular a ciegas hasta encontrarlo.
   *
   * Va después del pintado (`useEffect`) porque hasta que React no le
   * quita el `inert` al panel sus enlaces no admiten el foco.
   */
  useEffect(() => {
    if (!open) return;
    sheetRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);

  /*
   * El menú es una pieza de móvil. Si la ventana crece hasta escritorio con
   * el menú abierto, el CSS lo esconde pero el estado seguiría en
   * "abierto", y al volver a móvil el panel aparecería solo.
   *
   * Sin devolver el foco: en escritorio el botón está en `display: none` y
   * no admite foco, así que pedírselo solo serviría para dejar el foco
   * tirado en el <body>.
   */
  useEffect(() => {
    if (!open) return;

    const query = window.matchMedia(DESKTOP_QUERY);
    const sync = () => {
      if (query.matches) closeMenu(false);
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [open, closeMenu]);

  /*
   * ── EL FOCO NO SE ESCAPA DEL MENÚ ────────────────────────────────
   *
   * Mientras el panel está abierto, tabular tiene que dar vueltas entre el
   * botón y los enlaces en vez de irse a la página de detrás, que está
   * tapada por el velo: seguir tabulando allí sería mover un cursor
   * invisible por enlaces que no se ven.
   *
   * Es una trampa de foco mínima y puede serlo porque los únicos elementos
   * enfocables del conjunto son el botón y los enlaces del panel: no hace
   * falta la consulta genérica de "todo lo que puede recibir foco".
   */
  const onNavKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!open || event.key !== "Tab") return;

    const sheet = sheetRef.current;
    const burger = burgerRef.current;
    if (!sheet || !burger) return;

    const stops = [burger, ...sheet.querySelectorAll<HTMLAnchorElement>("a")];
    const first = stops[0];
    const last = stops[stops.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={`${styles.navbar} ${className}`}
      /* Un solo interruptor para toda la hoja de estilos: de él cuelgan las
         tres barras que se cruzan, el velo que aparece y el panel que baja. */
      data-open={open ? "true" : "false"}
      onKeyDown={onNavKeyDown}
    >
      {/*
        ── MÓVIL ──────────────────────────────────────────────────────
        Botón, velo y panel llevan su propio `position: fixed` en vez de
        colocarse dentro de la banda del dock: la banda tiene su sitio (el
        borde superior en escritorio) y estas tres piezas el suyo, y
        colgarlas de ella obligaría a deshacer su centrado en cada una.
      */}
      <button
        ref={burgerRef}
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls={sheetId}
        /* El nombre cambia con el estado porque la acción cambia: el mismo
           botón abre y cierra, y un rótulo fijo mentiría la mitad del
           tiempo. El dibujo (barras o aspa) es decoración y va oculto para
           los lectores. */
        aria-label={open ? closeMenuLabel : openMenuLabel}
        onClick={() => (open ? closeMenu() : setOpen(true))}
      >
        <span className={styles.bars} aria-hidden="true">
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </span>
      </button>

      {/* Decoración pura: cerrar tocando fuera es un atajo de dedo y de
          ratón, y el teclado ya tiene Escape y el propio botón. Por eso no
          es un <button> ni aparece en el árbol de accesibilidad. */}
      <div
        className={styles.scrim}
        aria-hidden="true"
        onClick={() => closeMenu()}
      />

      <div
        ref={sheetRef}
        id={sheetId}
        className={styles.sheet}
        /*
         * `inert` y no `hidden`: `hidden` es `display: none` y mataría la
         * animación de bajada, porque no se puede animar lo que no se
         * pinta. `inert` deja el panel en su sitio, listo para deslizarse,
         * pero fuera del tabulador y fuera del árbol de accesibilidad
         * mientras está cerrado.
         */
        inert={!open}
      >
        <ul className={styles.sheetList}>
          {items.map((item, index) => {
            const isActive = index === active;

            return (
              <li
                key={item.href}
                className={styles.sheetSlot}
                data-active={isActive}
                /* Su turno en la entrada escalonada. Viaja como número
                   pelado porque el CSS lo multiplica por un retardo: llevar
                   aquí los milisegundos repartiría el ritmo de la animación
                   entre dos archivos. */
                style={{ "--i": String(index) } as CSSProperties}
              >
                <a
                  href={item.href}
                  className={styles.sheetItem}
                  aria-current={isActive ? "true" : undefined}
                  /*
                   * Encender el ítem en el mismo fotograma del toque, sin
                   * esperar a que el scroll suave llegue a la sección y el
                   * observador se entere — igual que en el dock.
                   *
                   * Y cerrar: un menú que se queda abierto tapando la
                   * sección a la que acabas de saltar es la peor versión de
                   * esto. El salto lo sigue haciendo el ancla, así que la
                   * URL guarda la sección y el enlace se puede abrir en
                   * otra pestaña como cualquier otro.
                   */
                  onClick={() => {
                    setActive(index);
                    closeMenu(false);
                  }}
                >
                  <NavIcon id={item.icon} className={styles.sheetIcon} />
                  <span className={styles.sheetLabel}>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── ESCRITORIO: el dock de siempre ─────────────────────────── */}
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
                <NavIcon id={item.icon} className={styles.icon} />

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
