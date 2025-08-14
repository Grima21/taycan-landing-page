import { motion } from "framer-motion";

/**
 * Reveal: anima su contenido cuando entra al viewport.
 * Props:
 * - as: etiqueta HTML a renderizar (default 'div')
 * - className: clases Tailwind extra
 * - delay, duration, y, x: control fino de la animación
 * - once: animar una sola vez (default true)
 * - amount: cuánto del elemento debe entrar para disparar (0..1)
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  duration = 0.9,
  y = 20,
  x = 0,
  once = true,
  amount = 0.15,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    </motion.div>
  );
}
