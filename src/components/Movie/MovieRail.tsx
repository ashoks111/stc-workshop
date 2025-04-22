import React, { useRef, useEffect, useCallback, useMemo } from "react";
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
  const setMovies = useMovieStore((state) => state.setMovies);
  const movieList = useMovieStore((state) => state.movies);
  const setActiveMovie = useMovieStore((state) => state.setActiveMovie);
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

  const MovieCardRenderer = React.memo(
    ({ index, style, data }: ListChildComponentProps) => {
      const movie = data[index];
      const isFocused = data.focusedKey === movie?.id;
      console.log("isFocused", isFocused, data.focusedKey, movie?.id);
      const ref = useFocusEffect<HTMLDivElement>(isFocused);
      const onFocus = useMemo(
        () => () => data.onMovieFocus(movie, index),
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

  return (
    <section
      className="py-6 relative pl-4 "
      aria-label={`${title} movie collection`}
    >
      <div className="relative">
        <List
          className="flex justify-center items-center hide-scrollbar"
          height={320}
          itemCount={hasMore.current ? movies.length + 6 : movies.length}
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
      </div>
    </section>
  );
};

export default MovieRail;
