import LazyImage from "../common/LazyImage";

type AvatarProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

/**
 * Avatar component.
 *
 * This component renders a circular avatar image using the `LazyImage` component for optimized
 * lazy loading. It is typically used to display user profile pictures or similar content.
 */

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
