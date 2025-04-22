import React from "react";

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag: TagType;
  children: React.ReactNode;
  className?: string;
};

type TypographyStyleMap = {
  [key in TagType]: string;
};

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
