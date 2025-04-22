type LazyImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const LazyImage = ({ src, alt="Image", className, width, height }: LazyImageProps) => {
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
