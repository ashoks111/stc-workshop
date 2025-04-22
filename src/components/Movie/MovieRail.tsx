import React, { useRef, useEffect, useCallback } from "react";
import MovieCard from "./MovieCard";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { fetchMovies } from "../../api/movies";
import { useMovieStore } from "../../store/useMovieStore";
import MovieSkeleton from "./MovieSkeleton";
import { Movie, MovieRailProps } from "../../type/Movie";
import { MOVIE_CARD_PADDING_LENGTH } from "../../config/constants";
import { useFocusEffect } from "../../hooks/useFocusEffect";
import { useFocusStore } from "../../store/useFocusableStore";

const MovieRail: React.FC<MovieRailProps> = ({
  title,
  movies,
  onMovieFocus,
}) => {
  const { setMovies, setActiveMovie } = useMovieStore((state) => state.actions);
  const movieList = useMovieStore((state) => state.movies);
  const hasMore = useRef(true);
  const pageNoRef = useRef(1);

  useEffect(() => {
    getMovies(pageNoRef.current);
  }, []);

  const getMovies = useCallback(
    async (pageNo: number) => {
      try {
        if (!hasMore.current) return;
        const response = await fetchMovies(pageNo);
        pageNoRef.current = pageNo + 1;

        setMovies([...movieList, ...response.data]);
        if (pageNo === 1) {
          setActiveMovie(response.data[0]);
        }
        if (response.data.length < 10) {
          hasMore.current = false;
          return;
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    [movieList, setMovies, setActiveMovie]
  );

  const handleMovieFocus = useCallback(
    (movie: Movie, index: number) => {
      onMovieFocus?.(movie);

      // Cache values to avoid repeated access
      const hasMoreMovies = hasMore.current;
      const movieThreshold = movies.length - 2;

      if (hasMoreMovies && index >= movieThreshold) {
        getMovies(pageNoRef.current);
      }
    },
    [onMovieFocus, movies.length, getMovies]
  );

  const handleItemsRendered = useCallback(
    ({ visibleStopIndex }: { visibleStopIndex: number }) => {
      const hasMoreMovies = hasMore.current;
      const movieThreshold = movies.length - 2;

      if (hasMoreMovies && visibleStopIndex >= movieThreshold) {
        getMovies(pageNoRef.current);
      }
    },
    [movies.length, getMovies]
  );

  return (
    <section
      className="py-6 relative pl-4 max-w-[calc(100vw-16rem-3rem)]"
      aria-label={`${title} movie collection`}
    >
      <List
        className="flex justify-center items-center hide-scrollbar !w-full"
        height={320}
        itemCount={35}
        itemSize={220}
        width={
          hasMore.current
            ? window.innerWidth
            : window.innerWidth - movies.length * MOVIE_CARD_PADDING_LENGTH
        }
        layout="horizontal"
        itemData={{
          ...movies,
          onMovieFocus: handleMovieFocus,
          focusedKey: useFocusStore((state) => state.focusedKey),
        }}
        onItemsRendered={handleItemsRendered}
      >
        {MovieCardRenderer}
      </List>
    </section>
  );
};

export default MovieRail;

const MovieCardRenderer = React.memo(
  ({ index, style, data }: ListChildComponentProps) => {
    const movie = data[index];
    const isFocused = data.focusedKey === movie?.id;
    const ref = useFocusEffect<HTMLDivElement>(isFocused);

    const onFocus = useCallback(
      () => data.onMovieFocus(movie, index),
      [data, movie, index]
    );

    return (
      <div style={style} className="flex items-center justify-center">
        {!movie ? (
          <MovieSkeleton idx={"skeleton" + index} />
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
  }
);
