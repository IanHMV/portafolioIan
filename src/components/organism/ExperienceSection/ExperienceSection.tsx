import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import styles from "./ExperienceSection.module.css";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

import type { ExperienceSectionProps } from "./ExperienceSection.types";

/* Cascada: cada fólder arranca 20px más abajo que el anterior y se apila
   encima, así de todos se ve al menos su pestaña con el nombre. */
const FOLDER_STEP = 20;

const ExperienceSection = ({ id,
  title,
  description,
  folders,
  defaultOpenIndex = 0,
  className = "",
}: ExperienceSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 && defaultOpenIndex < folders.length
      ? defaultOpenIndex
      : null
  );
  const stageRef = useRef<HTMLDivElement>(null);

  /* Recuerda la última carpeta abierta para que la hoja conserve su
     contenido mientras se cierra (si no, colapsaría vacía de golpe) */
  const lastOpen = useRef(0);
  if (openIndex !== null) lastOpen.current = openIndex;
  const sheetFolder = folders[openIndex ?? lastOpen.current];

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

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

export default ExperienceSection;
