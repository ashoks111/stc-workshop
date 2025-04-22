import { useState } from "react";
import { useMovieStore } from "../../store/useMovieStore";
import { MovieCardProps } from "../../type/Movie";
import LazyImage from "../common/LazyImage";

/**
 * MovieCard component.
 *
 * This component represents a single movie card in the movie rail. It displays the movie's poster,
 * title, and year, and includes hover and focus effects for enhanced interactivity.
 */
const MovieCard = ({ movie, elemRef, onFocus, index }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeMovie = useMovieStore((state) => state.activeMovie);
  const isActive = activeMovie?.id === movie?.id;

  const handleFocus = () => {
    if (onFocus) {
      onFocus(movie);
    }
  };
  const animationDelay = `${index * 50}ms`;

  return (
    <div
      ref={elemRef}
      id={movie?.id}
      className={`flex-shrink-0 w-48 h-72 mx-3 transition-all duration-300 rounded-xl ease-out transform 
                ${
                  isActive
                    ? "scale-110 z-10 border-2 border-white"
                    : "scale-100 z-0"
                }
              `}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <>
        <div className="relative w-full h-full overflow-hidden rounded-xl group">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse  transition-opacity`}
          />

          <LazyImage
            src={movie?.posterUrl}
            alt={movie?.title}
            className={`w-full h-full object-cover transition-all duration-700 ease-out
                        ${isHovered ? "brightness-110" : "brightness-100"}
                        focus:outline-none`}
          />

          {/* Gradient overlay at bottom for text */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Info that appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold truncate text-sm">
              {movie?.title}
            </h3>
            <p className="text-gray-300 text-xs">
              {movie?.year + "" + movie?.id}
            </p>
          </div>

          <div className="absolute inset-0 rounded-xl ring-2 ring-blue-500 ring-opacity-0 focus-within:ring-opacity-100 pointer-events-none" />
        </div>
      </>
    </div>
  );
};

export default MovieCard;
