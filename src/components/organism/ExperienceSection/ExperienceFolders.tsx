"use client";

/*
 * APARCADO — el archivador de fólders arrastrables.
 *
 * Esta era la sección Experience hasta que se rehízo como rejilla de
 * tarjetas + modal (ver ExperienceSection.tsx). No se borra: el componente
 * está entero y funcional, solo desmontado — nadie lo importa.
 *
 * Trae su propio CSS (ExperienceFolders.module.css) y sus propios tipos
 * (ExperienceFolders.types.ts), así que para devolverlo basta con:
 *
 *   1. importarlo en src/app/page.tsx en lugar de ExperienceSection, y
 *   2. pasarle datos con la forma `folders` de ExperienceFolders.types.ts
 *      (label, color, preview{code,note,date}, sheet{fileNo,heading,period,
 *      paragraphs}). La versión anterior de `experienceSection` en
 *      src/content/data.ts está en el historial de git — commit fe3e38d.
 *
 * Depende de DraggableCardBody (src/components/ui/draggable-card.tsx), que
 * sigue en uso en otras partes, así que no hay nada más que restaurar.
 */

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import styles from "./ExperienceFolders.module.css";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

import type { ExperienceFoldersProps } from "./ExperienceFolders.types";

/* Cascada: cada fólder arranca 20px más abajo que el anterior y se apila
   encima, así de todos se ve al menos su pestaña con el nombre. */
const FOLDER_STEP = 20;

const ExperienceFolders = ({ id,
  title,
  description,
  folders,
  defaultOpenIndex = 0,
  className = "",
}: ExperienceFoldersProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 && defaultOpenIndex < folders.length
      ? defaultOpenIndex
      : null
  );
  const stageRef = useRef<HTMLDivElement>(null);

  /* Recuerda la última carpeta abierta para que la hoja conserve su
     contenido mientras se cierra (si no, colapsaría vacía de golpe).
     Va en estado y no en un ref: leer o escribir un ref durante el render
     es justo lo que prohíbe la regla react-hooks/refs. */
  const [sheetIndex, setSheetIndex] = useState(
    defaultOpenIndex >= 0 && defaultOpenIndex < folders.length
      ? defaultOpenIndex
      : 0
  );
  const sheetFolder = folders[sheetIndex];

  const toggle = (index: number) => {
    setSheetIndex(index);
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKey = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  };

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...title} />
        <Text {...description} />
      </div>

      <div className={`${styles.content} mx-auto w-full max-w-5xl`}>
        <DraggableCardContainer className="relative">
          <div
            ref={stageRef}
            className={styles.stage}
            style={{ "--count": folders.length } as CSSProperties}
          >
            {folders.map((folder, index) => (
              <DraggableCardBody
                /* el label NO es único: hay varios "Frontend Developer" y
                   React avisaba de keys duplicadas */
                key={`${folder.label}-${index}`}
                containerRef={stageRef}
                onTap={() => toggle(index)}
                glare={false}
                style={{ top: index * FOLDER_STEP, zIndex: index }}
                className="absolute left-1/2 -ml-32 min-h-0 w-64 overflow-visible rounded-none bg-transparent p-0 shadow-none"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIndex === index}
                  onKeyDown={(event) => handleKey(event, index)}
                  className={styles.floatFolder}
                  style={{ "--folder-color": folder.color } as CSSProperties}
                >
                  <span className={styles.floatTab}>{folder.label}</span>
                  <div className={styles.floatBody}>
                    <div className={styles.floatMeta}>
                      <span>{folder.preview.code}</span>
                      <span>{folder.preview.date}</span>
                    </div>
                    <p className={styles.floatNote}>{folder.preview.note}</p>
                  </div>
                </div>
              </DraggableCardBody>
            ))}
          </div>
        </DraggableCardContainer>

        {/* La hoja de siempre: se despliega debajo del área flotante */}
        <div
          className={styles.sheetWrap}
          data-open={openIndex !== null}
          inert={openIndex === null}
        >
          <div className={styles.sheetInner}>
            {sheetFolder && (
              <article
                className={styles.sheet}
                style={{ "--folder-color": sheetFolder.color } as CSSProperties}
              >
                <span className={styles.fileTag}>File {sheetFolder.sheet.fileNo}</span>

                <Heading as="h3" size="text-3xl" className={styles.sheetHeading}>
                  {sheetFolder.sheet.heading}
                </Heading>

                <Text as="p" size="text-xs" className={styles.sheetPeriod}>
                  {sheetFolder.sheet.period}
                </Text>

                {sheetFolder.sheet.paragraphs.map((paragraph) => (
                  <Text key={paragraph} as="p" size="text-base" className={styles.sheetParagraph}>
                    {paragraph}
                  </Text>
                ))}
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFolders;
