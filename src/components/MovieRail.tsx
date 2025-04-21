import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { fetchMovies } from "../api/movies";
import { useMovieStore } from "../store/useMovieStore";
import MovieSkeleton from "./MovieSkeleton";
import { Movie } from "../type/Movie";
import { useFocusStore } from "../store/useFocusableStore";
interface MovieRailProps {
  title: string;
  movies: Movie[];
  onMovieFocus?: (movie: Movie) => void;
}

const PADDING_LENGTH = 8;

const MovieRail: React.FC<MovieRailProps> = ({
  title,
  movies,
  onMovieFocus,
}) => {
  //  const listRef = useRef<List>(null);
  const setMovies = useMovieStore((state) => state.setMovies);
  const movieList = useMovieStore((state) => state.movies);
  const setActiveMovie = useMovieStore((state) => state.setActiveMovie);
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const [hasMore, setHasMore] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    getMovies(pageNo);
  }, []);

  const getMovies = async (pageNo: number) => {
    try {
      const response = await fetchMovies(pageNo);
      setPageNo(pageNo + 1);

      setMovies([...movieList, ...response.data]);
      if (pageNo === 1) {
        setActiveMovie(response.data[0]);
      }
      if (response.data.length < 10) {
        setHasMore(false);
        return;
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const MovieCardRenderer = ({
    index,
    style,
    data,
  }: ListChildComponentProps) => {
    const movie = data[index];
    const onFocus = () => data.onMovieFocus(movie, index);
    const isFocused = focusedKey === movie?.id;
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (isFocused && ref.current && movie?.id) {
        ref.current.focus();
      }
    }, [isFocused]);

    return (
      <div style={style} className="flex items-center justify-center">
        {!movie ? (
          <MovieSkeleton idx={"skelton" + index} />
        ) : (
          <MovieCard
            elemRef={ref}
            key={movie?.id}
            movie={movie}
            index={index}
            onFocus={onFocus}
          />
        )}
      </div>
    );
  };
  const handleMovieFocus = (movie: Movie, index: number) => {
    onMovieFocus?.(movie);
    if (hasMore && index >= movies.length - 2) {
      getMovies(pageNo);
    }
  };

  const handleItemsRendered = ({
    visibleStopIndex,
  }: {
    visibleStopIndex: number;
  }) => {
    if (visibleStopIndex >= movies.length - 2 && hasMore) {
      getMovies(pageNo);
    }
  };
  return (
    <section
      className="py-6 relative "
      aria-label={`${title} movie collection`}
    >
      <div className="relative">
        <List
          className="flex justify-center items-center hide-scrollbar"
          height={320}
          itemCount={hasMore ? movies.length + 6 : movies.length}
          itemSize={220}
          width={
            hasMore
              ? window.innerWidth
              : window.innerWidth - movies.length * PADDING_LENGTH
          }
          layout="horizontal"
          itemData={{
            ...movies,
            onMovieFocus: handleMovieFocus,
          }}
          onItemsRendered={handleItemsRendered}
        >
          {MovieCardRenderer}
        </List>
      </div>
    </section>
  );
};

export default MovieRail;
