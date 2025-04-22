/**
 * MovieSkeleton component.
 *
 * This component represents a placeholder skeleton for a movie card.
 * It is displayed while the actual movie data is being loaded, providing a visual cue to the user.
 * The skeleton uses animations to simulate a loading effect.s
 */
const MovieSkeleton = ({ idx }: { idx: string }) => {
  return (
    <div
      key={idx}
      className="flex-shrink-0 w-48 h-72 mx-3 transition-all duration-300 ease-out transform  bg-zinc-800 rounded-lg animate-pulse relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-shimmer" />
    </div>
  );
};
export default MovieSkeleton;
