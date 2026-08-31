import type { TextProps } from "../../atoms/Text/Text.types";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";

/**
 * Una experiencia. Se lee en dos niveles:
 *
 *  - la TARJETA de la rejilla, que solo enseña código, título, resumen y
 *    fecha — lo justo para decidir si te interesa, y
 *  - el MODAL que se abre al hacer click, donde va el detalle completo.
 *
 * La regla es que en la tarjeta no quepa un párrafo: si el resumen necesita
 * más de dos líneas, ese texto pertenece a `detail.paragraphs`.
 */
export interface ExperienceEntry {
  /** Número de orden que se pinta arriba de la tarjeta — ej. "01" */
  code: string
  /** Puesto o proyecto: el título de la tarjeta */
  title: string
  /** Resumen breve, una o dos líneas. Sin punto final, como un rótulo */
  summary: string
  /** Periodo corto para el pie de la tarjeta — ej. "2024 — 2025" */
  date: string
  /** Lo que se despliega en el modal al hacer click */
  detail: {
    /** Encabezado del modal — puesto, empresa o proyecto */
    heading: string
    /** Periodo completo, con lugar si aporta — ej. "2024 — 2025 · Remoto" */
    period: string
    /** Párrafos con la experiencia a fondo */
    paragraphs: string[]
  }
}

export interface ExperienceSectionProps {
  id?: string
  className?: string
  /** Rótulo pequeño en versalitas sobre el título — ej. "WHERE I'VE WORKED" */
  eyebrow?: string
  /** Título de la sección. Admite \n: `.title` respeta los saltos de línea */
  title: Pick<HeadingProps, "as" | "children" | "className" | "size">
  /** Bajada opcional bajo el título. Si no se pasa, no se pinta nada */
  description?: Pick<TextProps, "as" | "children" | "className" | "size" | "weight">
  entries: ExperienceEntry[]
}
