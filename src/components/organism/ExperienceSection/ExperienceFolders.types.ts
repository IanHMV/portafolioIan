/*
 * APARCADO — tipos del archivador de fólders (ver ExperienceFolders.tsx).
 *
 * Vivían en ExperienceSection.types.ts hasta que la sección se rehízo como
 * rejilla de tarjetas + modal. Se mudan aquí para que el componente
 * aparcado siga compilando por su cuenta y los tipos nuevos no arrastren
 * una forma de datos que ya nadie usa.
 */

import type { TextProps } from "../../atoms/Text/Text.types";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";

export interface ExperienceFolder {
  /** Texto visible en la pestaña de la carpeta */
  label: string
  /** Color de la carpeta como valor CSS válido — ej. "#2b4bdb" */
  color: string
  /** Franja que se asoma al pasar el mouse por la carpeta */
  preview: {
    /** Código corto de archivo — ej. "16B" */
    code: string
    /** Nota breve de una o dos líneas */
    note: string
    /** Fecha o periodo — ej. "Dec 13, 2024" */
    date: string
  }
  /** Hoja que se despliega al hacer click en la carpeta */
  sheet: {
    /** Número de expediente — ej. "Nº 01" */
    fileNo: string
    /** Título de la hoja — puesto, empresa o proyecto */
    heading: string
    /** Periodo — ej. "2024 — presente" */
    period: string
    /** Párrafos con el detalle de la experiencia */
    paragraphs: string[]
  }
}

export interface ExperienceFoldersProps {
  id?: string
  className?: string
  /** Índice de la carpeta que aparece abierta al cargar (default: 0, la primera) */
  defaultOpenIndex?: number
  title: Pick<HeadingProps, "as" | "children" | "className" | "size">
  description: Pick<TextProps, "as" | "children" | "className" | "size" | "weight">
  folders: ExperienceFolder[]
}
