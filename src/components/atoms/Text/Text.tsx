import type { TextProps } from "./Text.types";

const Text = ({
  as: Tag = 'p',
  size = "text-base",
  weight = "font-normal",
  className = "",
  children
}: TextProps) => {
  /*
   * Sin la clase `outfit`: el texto corrido hereda Inter del <body>, que es
   * la tipografía de lectura del sitio. Outfit se queda para los títulos
   * (el átomo Heading), que es donde aporta carácter.
   *
   * De paso, `weight` vuelve a funcionar: `.outfit` fija font-weight 600 y
   * al ir sin capa le ganaba a las utilidades de Tailwind, así que TODO el
   * texto se pintaba en semibold aunque pidiera font-normal.
   */
  return (
    <Tag className={`${size} ${weight} ${className}`}>
      {children}
    </Tag>
  );
}

export default Text;