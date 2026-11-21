import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-roboto font-medium tracking-widest transition duration-200 motion-safe:hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#99042F] text-white hover:bg-[#7a0326] hover:shadow-md focus-visible:ring-[#99042F]",
  light:
    "bg-white text-[#99042F] hover:bg-gray-100 hover:shadow-md focus-visible:ring-white focus-visible:ring-offset-[#99042F]",
};

const sizes: Record<Size, string> = {
  md: "px-8 py-2.5 text-sm",
  lg: "px-12 py-3 text-base",
};

/** Clases del botón de marca, para usar también en <Link> y <a>. */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export default function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
