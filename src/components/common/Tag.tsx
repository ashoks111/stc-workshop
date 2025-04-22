import Typography from "../common/Typography";
/**
 * Tag component.
 *
 * This component represents a styled tag or label, typically used to display categories,
 * genres, or other metadata. It includes hover and focus effects for interactivity.
 */

const Tag = ({
  tagName,
  className,
}: {
  tagName: string;
  className?: string;
}) => {
  return (
    <div
      className={`px-6 py-1 rounded bg-white text-black font-medium hover:bg-white/90 focus:bg-white/80 focus:outline-none transition-colors ${className}`}
    >
      <Typography tag="span">{tagName}</Typography>
    </div>
  );
};
export default Tag;
