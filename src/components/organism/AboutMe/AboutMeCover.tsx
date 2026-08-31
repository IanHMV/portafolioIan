/*
 * GUARDADO PARA REUSO — esta era la sección "About me" hasta ahora y ya no
 * se monta en ningún sitio.
 *
 * Era una tarjeta flotante con dos diapositivas apiladas: una portada a
 * pantalla completa (vídeo o imagen) con el rótulo "About Me" y, al entrar
 * en pantalla, un deslizamiento vertical que descubría el texto de
 * presentación. Se retiró al rehacer la sección con la tarjeta de tinta
 * plateada (ver AboutMe.tsx), pero se conserva entera —componente y CSS en
 * AboutMeCover.module.css— por si la portada vuelve.
 *
 * Para recuperarla: importar este archivo en src/pages/Inicio.tsx en lugar
 * de AboutMe y devolver a `aboutMe` (src/pages/data.ts) las props
 * `coverImage` y `coverTitle` que pide la interfaz de aquí abajo.
 */
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import styles from "./AboutMeCover.module.css";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { ImageProps } from "../../atoms/Image/Image.types";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

const AUTO_ADVANCE_DELAY_MS = 2600;

type View = "cover" | "content";

interface AboutMeCoverProps {
  id?: string
  coverImage: Pick<ImageProps, "src" | "alt">
  coverTitle: Pick<HeadingProps, "children" | "className" | "size">
  heading: Pick<HeadingProps, "children" | "className" | "size">
  paragraphs: string[]
  contentImage: Pick<ImageProps, "src" | "alt">
  className?: string
}

/* Las portadas animadas se sirven como vídeo, no como GIF. Un GIF se
   descomprime fotograma a fotograma en el hilo principal — el mismo que
   mueve el scroll — mientras que un <video> lo decodifica la GPU aparte.
   Con eso el scroll deja de competir con la animación de fondo. */
const VIDEO_SRC = /\.(mp4|webm)$/i;

const AboutMeCover = ({ id,
  coverImage,
  coverTitle,
  heading,
  paragraphs,
  contentImage,
  className = "",
}: AboutMeCoverProps) => {
  const coverIsVideo = VIDEO_SRC.test(coverImage.src);
  const [view, setView] = useState<View>("cover");
  const [raised, setRaised] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const autoTimer = useRef(0);
  const autoDone = useRef(false);

  const goTo = (next: View) => {
    window.clearTimeout(autoTimer.current);
    autoDone.current = true;
    setView(next);
    /* Keep focus on the card: if it stayed on the clicked button, the
       browser would scroll the page chasing it as the slide moves away. */
    cardRef.current?.focus({ preventScroll: true });
  };

  /* Rise + auto-advance: when the section starts to show, the card lifts
     off the page; once it is mostly visible, wait a moment on the cover
     and slide down to the content. Manual navigation disables the auto. */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) setRaised(true);

        if (autoDone.current) return;
        if (entry.intersectionRatio >= 0.6) {
          autoTimer.current = window.setTimeout(() => {
            autoDone.current = true;
            setView("content");
          }, AUTO_ADVANCE_DELAY_MS);
        } else {
          window.clearTimeout(autoTimer.current);
        }
      },
      { threshold: [0.2, 0.6] }
    );
    observer.observe(section);

    return () => {
      window.clearTimeout(autoTimer.current);
      observer.disconnect();
    };
  }, []);

  const handleTilt = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${(py * -4).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(px * 6).toFixed(2)}deg`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${styles.section} flex min-h-svh items-center justify-center bg-surface px-4 py-16 sm:px-8 ${className}`}
    >
      <div className={`${styles.lift} ${raised ? styles.liftRaised : ""} w-full max-w-5xl rounded-3xl`}>
        <div
          ref={cardRef}
          tabIndex={-1}
          onPointerMove={handleTilt}
          onPointerLeave={resetTilt}
          className={`${styles.card} relative w-full overflow-hidden rounded-3xl border border-white/10 outline-none`}
        >
          <div className={`${styles.track} ${view === "content" ? styles.trackDown : ""}`}>
            <div className={styles.slide} inert={view !== "cover"}>
              {coverIsVideo ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={coverImage.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={coverImage.alt}
                />
              ) : (
                <Image
                  src={coverImage.src}
                  alt={coverImage.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className={styles.coverOverlay} />

              <div className="relative flex h-full items-center justify-center">
                <Heading
                  as="h2"
                  size={coverTitle.size}
                  className={`font-bold text-white tracking-tight drop-shadow-lg ${coverTitle.className ?? ""}`}
                >
                  {coverTitle.children}
                </Heading>
              </div>

              <button
                type="button"
                aria-label="Scroll down to read about me"
                onClick={() => goTo("content")}
                className={`${styles.navButton} ${styles.bounce} bottom-6 left-1/2 -translate-x-1/2`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className={`${styles.slide} bg-surface`} inert={view !== "content"}>
              <div className="grid h-full items-center gap-8 p-8 pt-20 sm:p-12 sm:pt-20 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col gap-5 text-left">
                  <Heading
                    as="h3"
                    size={heading.size}
                    className={`font-bold text-white tracking-tight ${heading.className ?? ""}`}
                  >
                    {heading.children}
                  </Heading>

                  {paragraphs.map((paragraph) => (
                    <Text key={paragraph} as="p" className="text-gray-400 text-base leading-relaxed">
                      {paragraph}
                    </Text>
                  ))}
                </div>

                <div className="hidden items-center justify-center md:flex">
                  <Image
                    src={contentImage.src}
                    alt={contentImage.alt}
                    rounded="rounded-lg"
                    className="max-h-[26rem] w-full max-w-sm object-cover shadow-2xl"
                  />
                </div>
              </div>

              <button
                type="button"
                aria-label="Back to cover"
                onClick={() => goTo("cover")}
                className={`${styles.navButton} left-1/2 top-6 -translate-x-1/2`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeCover;
