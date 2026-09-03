"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ExperienceSection.module.css";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import type { ExperienceSectionProps } from "./ExperienceSection.types";

const ExperienceSection = ({
  id,
  eyebrow,
  title,
  description,
  entries,
  className = "",
}: ExperienceSectionProps) => {
  /* Dos estados y no uno: `isOpen` dice si el modal se ve y `activeIndex`
     qué ficha muestra. Al cerrar solo se apaga el primero, así el contenido
     sigue en su sitio mientras el modal se desvanece — con un único índice
     que volviera a null, la ficha se vaciaría de golpe. */
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const entry = entries[activeIndex];

  const open = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) {
      /* showModal() es lo que da gratis el foco atrapado, el fondo inerte y
         el cierre con Escape. jsdom no lo implementa, así que en pruebas se
         cae al atributo `open` — el modal se pinta igual, sin capa superior. */
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }

    /* showModal() vuelve inerte la página de atrás, pero NO impide que siga
       haciendo scroll debajo del modal. */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

        <Heading
          as={title.as ?? "h2"}
          className={`${styles.title} ${title.className ?? ""}`}
        >
          {title.children}
        </Heading>

        {description && (
          <Text
            as="p"
            className={`${styles.lead} ${description.className ?? ""}`}
          >
            {description.children}
          </Text>
        )}
      </div>

      <ul className={styles.grid}>
        {entries.map((item, index) => (
          /* el título NO es único: puede repetirse el mismo puesto en dos
             sitios distintos, así que la key lleva el índice */
          <li key={`${item.title}-${index}`} className={styles.cell}>
            {/* Un <button> y no un <div role="button">: así el teclado, el
                foco y Enter/Espacio funcionan sin escribir una línea. */}
            <button
              type="button"
              className={styles.card}
              onClick={() => open(index)}
              aria-haspopup="dialog"
            >
              <span className={styles.code}>{item.code}</span>

              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>

              <Text as="p" className={styles.cardSummary}>
                {item.summary}
              </Text>

              <span className={styles.cardFoot}>
                <span className={styles.cardDate}>{item.date}</span>
                <span className={styles.cardCue} aria-hidden="true">
                  Read more
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* El click en el ::backdrop llega con `target` = el propio <dialog>,
          por eso el contenido va envuelto: si el click cae en el envoltorio
          o más adentro, no es el fondo y el modal se queda abierto. */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={entry?.detail.heading}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {entry && (
          <article className={styles.modal}>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className={styles.code}>{entry.code}</span>

            <Heading as="h3" className={styles.modalTitle}>
              {entry.detail.heading}
            </Heading>

            <span className={styles.modalPeriod}>{entry.detail.period}</span>

            <div className={styles.modalBody}>
              {entry.detail.paragraphs.map((paragraph) => (
                <Text key={paragraph} as="p" className={styles.modalParagraph}>
                  {paragraph}
                </Text>
              ))}
            </div>
          </article>
        )}
      </dialog>
    </section>
  );
};

export default ExperienceSection;
