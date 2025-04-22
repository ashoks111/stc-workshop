type LazyImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

/**
 * LazyImage component.
 *
 * This component renders an image with lazy loading enabled, which helps improve performance
 * by deferring the loading of images until they are visible in the viewport.
 */
const LazyImage = ({
  src,
  alt = "Image",
  className,
  width,
  height,
}: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};
export default LazyImage;
