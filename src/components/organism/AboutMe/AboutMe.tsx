import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./AboutMe.module.css";
import type { AboutMeProps } from "./AboutMe.types";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

/*
 * Una sola tarjeta con dos vistas encima de la misma celda: primero el
 * rótulo (monograma + oficio) y, al llegar a la sección, se desvanece para
 * dejar salir la presentación.
 *
 * La versión anterior —portada a pantalla completa con vídeo y deslizamiento
 * vertical— no se ha borrado: vive en ./AboutMeCover.tsx con su propio CSS,
 * lista para volver a montarse.
 */

/* Cuánto se queda el rótulo en pantalla antes de dar paso al texto. Lo justo
   para leerlo: más tiempo y parece que la página se ha quedado colgada. */
const REVEAL_DELAY_MS = 1600;

type View = "cover" | "info";

/*
 * La preferencia de movimiento no es estado de React: vive en el sistema
 * operativo y puede cambiar mientras la página está abierta. Por eso se lee
 * con `useSyncExternalStore` —el mecanismo que React trae para datos de
 * fuera— y no con un estado más un efecto.
 *
 * Lo que resuelve, además, es el prerenderizado: el tercer argumento es la
 * respuesta que se da cuando no hay navegador al que preguntar (`false`, o
 * sea la versión con movimiento), y React se encarga de volver a renderizar
 * con la preferencia real en cuanto hidrata, sin desajustar el HTML.
 */
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

const getMotion = () => window.matchMedia(MOTION_QUERY).matches;

const getMotionOnServer = () => false;

const AboutMe = ({
  id,
  cover,
  heading,
  paragraphs,
  contentImage,
  className = "",
}: AboutMeProps) => {
  /* Sin movimiento no hay nada que anunciar: la tarjeta se planta en su
     sitio y con la presentación abierta, que es el contenido que importa. */
  const staticView = useSyncExternalStore(
    subscribeMotion,
    getMotion,
    getMotionOnServer,
  );
  /* `null` = todavía no ha decidido nadie, así que manda la preferencia de
     movimiento. En cuanto el visitante toca el botón, este estado toma el
     mando y puede volver al rótulo si le apetece. */
  const [view, setView] = useState<View | null>(null);
  const [raised, setRaised] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const revealTimer = useRef(0);
  /* Una vez que el visitante toca el botón, el cambio automático se retira:
     mandar dos cosas a la vez sobre la misma tarjeta es lo que hace que un
     sitio parezca que "se mueve solo". */
  const revealed = useRef(false);

  const showingInfo = view === null ? staticView : view === "info";
  /* Quien pide menos movimiento no espera al observador: la tarjeta nace
     puesta en su sitio. */
  const plateRaised = raised || staticView;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || staticView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) setRaised(true);

        if (revealed.current) return;
        /* El fundido no se dispara al asomar, sino cuando la sección ya
           ocupa la pantalla: si no, se gasta el rótulo antes de que nadie
           haya llegado a leerlo. */
        if (entry.intersectionRatio >= 0.6) {
          revealTimer.current = window.setTimeout(() => {
            revealed.current = true;
            setView("info");
          }, REVEAL_DELAY_MS);
        } else {
          window.clearTimeout(revealTimer.current);
        }
      },
      { threshold: [0.2, 0.6] }
    );
    observer.observe(section);

    return () => {
      window.clearTimeout(revealTimer.current);
      observer.disconnect();
    };
  }, [staticView]);

  const toggleView = () => {
    window.clearTimeout(revealTimer.current);
    revealed.current = true;
    /* Se parte de lo que se está VIENDO, no del estado: la primera vez que
       se pulsa, `view` todavía es null y hay que darle la vuelta a lo que
       decidió la preferencia de movimiento. */
    setView(showingInfo ? "cover" : "info");
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${styles.section} flex min-h-svh items-center justify-center bg-surface px-4 py-16 sm:px-8 ${className}`}
    >
      <div className={`${styles.plate} ${plateRaised ? styles.plateRaised : ""}`}>
        <div className={styles.card}>
          {/* Los dos halos del fondo. Decorativos: se apartan al pasar el
              ratón y no dicen nada, así que se ocultan al lector de pantalla. */}
          <span className={`${styles.blob} ${styles.blobTop}`} aria-hidden="true" />
          <span className={`${styles.blob} ${styles.blobBottom}`} aria-hidden="true" />

          <div className={styles.stage}>
            {/* Vista 1 — el rótulo. `inert` la saca del foco y del lector de
                pantalla mientras está desvanecida: si no, se puede tabular
                hacia contenido invisible. */}
            <div
              className={`${styles.view} ${styles.cover} ${showingInfo ? styles.coverHidden : ""}`}
              inert={showingInfo}
            >
              <span className={`outfit ${styles.initials}`}>{cover.initials}</span>

              <Heading as="h2" className={styles.role}>
                {cover.role}
              </Heading>
            </div>

            {/* Vista 2 — la presentación que antes vivía en la diapositiva de
                abajo, ahora en el mismo sitio que el rótulo. */}
            <div
              className={`${styles.view} ${styles.info} ${showingInfo ? "" : styles.infoHidden}`}
              inert={!showingInfo}
            >
              <div className={styles.infoText}>
                <Heading as="h3" className={styles.infoHeading}>
                  {heading.children}
                </Heading>

                {paragraphs.map((paragraph) => (
                  <Text key={paragraph} as="p" className={styles.paragraph}>
                    {paragraph}
                  </Text>
                ))}
              </div>

              <div className={styles.portrait}>
                <Image
                  src={contentImage.src}
                  alt={contentImage.alt}
                  className={styles.portraitImg}
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleView}
            aria-label={showingInfo ? "Back to the title" : "Read my introduction"}
            className={`${styles.toggle} ${showingInfo ? styles.toggleUp : styles.bounce}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
