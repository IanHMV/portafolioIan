import type { ImageProps } from "../../atoms/Image/Image.types";

export interface CardProjectProps {
  className?: string;

  // ── Cara frontal ─────────────────────────────────
  /** Screenshot del proyecto como fondo */
  img: Pick<ImageProps, "src" | "alt">;
  /** Descripción corta del proyecto */
  description: string;

  // ── Cara trasera ─────────────────────────────────
  /** Nombre del proyecto */
  title: string;
  /** Texto de pie — ej: "2024 · React + TypeScript" */
  footer?: string;
  /** URL del repositorio en GitHub */
  githubUrl: string;
  /**
   * Color de fondo de la cara trasera como valor CSS válido.
   * Ejemplos: "#1e293b", "rgb(15,23,42)", "hsl(220,47%,11%)"
   * Default: "#151515"
   */
  backColor?: string;
}