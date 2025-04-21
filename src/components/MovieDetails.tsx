import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import Typography from "./Typography";
import Tag from "./Tag";
import { useMovieStore } from "../store/useMovieStore";
import { useFocusStore } from "../store/useFocusableStore";

const MovieDetails: React.FC = () => {
  const activeMovie = useMovieStore((state) => state.activeMovie);

  return (
    <div className="flex flex-1 justify-end px-12 py-3 pt-0  ">
      <div className="flex flex-col max-w-xl gap-2">
        <div className="flex items-baseline space-x-4">
          <Typography tag="h3" className="text-6xl font-bold text-white">
            {activeMovie?.title}
          </Typography>
          <div className="flex space-x-1">
            {"★★★☆☆".split("").map((star, i) => (
              <Typography
                tag="span"
                className="!text-xl font-bold text-white"
                key={i}
              >
                {star}
              </Typography>
            ))}
          </div>
        </div>
        <Typography tag="h6" className="text-white/80 text-xl ">
          {activeMovie?.year}
        </Typography>
        <Typography
          tag="p"
          className="text-white/90 text-lg max-w-2xl leading-relaxed"
        >
          {activeMovie?.description}
        </Typography>

        <div className="flex flex-wrap gap-4">
          {activeMovie?.genres.map((genre) => (
            <Tag key={genre} tagName={genre} />
          ))}
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default MovieDetails;

const PlayButton = () => {
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const isFocused = focusedKey === "play-button";
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);
  return (
    <button
      tabIndex={0}
      id="play-button"
      ref={ref}
      className={`w-12 h-12 mb-4 mt-2 rounded-full bg-white hover:bg-yellow-100/90 focus:bg-yellow-100/90 focus:outline-none transition-colors flex items-center justify-center group`}
    >
      <Play
        className="w-6 h-6 text-black transform group-hover:scale-110 transition-transform"
        fill="currentColor"
      />
    </button>
  );
};
