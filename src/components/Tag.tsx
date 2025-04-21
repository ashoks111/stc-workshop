import Typography from "./Typography";

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
