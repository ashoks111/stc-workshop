import React from "react";

/**
 * Typography component.
 *
 * This component provides a flexible way to render text elements (`h1`, `h2`, `p`, etc.)
 * with predefined styles. It allows customization through additional class names.
 *
 * @typedef {("h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span")} TagType
 * - The type of HTML tag to render.
 *
 * @typedef {Object} TypographyProps
 * @property {TagType} tag - The HTML tag to render (e.g., `h1`, `p`, `span`).
 * @property {React.ReactNode} children - The content to render inside the tag.
 * @property {string} [className] - Additional CSS classes to apply to the element.
 *
 * @param {TypographyProps} props - The props for the Typography component.
 * @returns {JSX.Element} - The rendered text element with the specified styles.
 */

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag: TagType;
  children: React.ReactNode;
  className?: string;
};

type TypographyStyleMap = {
  [key in TagType]: string;
};
/** Base styles for each tag type. */
const baseStyles: TypographyStyleMap = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base text-gray-800",
  span: "text-base text-gray-800",
};

const Typography: React.FC<TypographyProps> = ({
  tag,
  children,
  className = "",
}) => {
  const Tag = tag;
  const style = `${baseStyles[tag] || ""} ${className}`.trim();

  return <Tag className={style}>{children}</Tag>;
};

export default Typography;
