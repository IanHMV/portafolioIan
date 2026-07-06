import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * Helper estándar de shadcn/ui: combina clases condicionales (clsx) y
 * resuelve conflictos de utilidades Tailwind (tailwind-merge), de modo que
 * la clase pasada por props gana sobre la default del componente.
 * Ej: cn("p-6 bg-neutral-100", "p-0 bg-transparent") → "p-0 bg-transparent"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
