import React, { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";
import { Movie } from "../type/Movie";

interface MovieCardProps {
  movie: Movie;
  onFocus?: (movie: Movie) => void;
  index: number;
  elemRef?: React.Ref<HTMLDivElement>;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  elemRef,
  onFocus,
  index,
}) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const activeMovie = useMovieStore((state) => state.activeMovie);
  const isActive = activeMovie?.id === movie?.id;

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus(movie);
    }
  };

  // Staggered animation effect based on index
  const animationDelay = `${index * 50}ms`;

  return (
    <div
      ref={elemRef}
      id={movie?.id}
      className={`flex-shrink-0 w-48 h-72 mx-3 transition-all duration-300 ease-out transform 
                ${isHovered || isActive ? "scale-110 z-10" : "scale-100 z-0"}
                ${isLoaded ? "opacity-100" : "opacity-0"}`}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <>
        <div className="relative w-full h-full overflow-hidden rounded-xl group">
          {/* Skeleton loader that fades out when image loads */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse ${
              isLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity`}
          />

          <img
            src={movie?.posterUrl}
            alt={movie?.title}
            className={`w-full h-full object-cover transition-all duration-700 ease-out
                        ${isHovered ? "brightness-110" : "brightness-100"}
                        focus:outline-none`}
            onLoad={handleImageLoad}
            loading="lazy"
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

          {/* Focus outline for accessibility */}
          <div className="absolute inset-0 rounded-xl ring-2 ring-blue-500 ring-opacity-0 focus-within:ring-opacity-100 pointer-events-none" />
        </div>
      </>
    </div>
  );
};

export default MovieCard;
