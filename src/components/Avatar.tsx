import LazyImage from "./LazyImage";

type AvatarProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const Avatar = ({
  src,
  alt = "avatar",
  className,
  width,
  height,
}: AvatarProps) => {
  return (
    <div className={`w-14 h-14 rounded-full overflow-hidden ${className}`}>
      <LazyImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        width={width}
        height={height}
      />
    </div>
  );
};
export default Avatar;
