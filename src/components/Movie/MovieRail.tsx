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
/**
 * MovieRail component.
 *
 * This component renders a horizontal scrollable list of movie cards. It supports lazy loading
 * of additional movies as the user scrolls and manages focus behavior for TV-like navigation.
 */
const MovieRail: React.FC<MovieRailProps> = ({
  title,
  movies,
  onMovieFocus,
}) => {
  const { setMovies, setActiveMovie } = useMovieStore((state) => state.actions);
  const movieList = useMovieStore((state) => state.movies);
  const hasMore = useRef(true); // Ref to track whether more movies can be loaded
  const pageNoRef = useRef(1); // Ref to track the current page number for pagination

  useEffect(() => {
    getMovies(pageNoRef.current);
  }, []);

  /**
   * Fetches movies for the given page number and updates the movie store.
   *
   * @param {number} pageNo - The page number to fetch.
   */
  const getMovies = useCallback(
    async (pageNo: number) => {
      try {
        if (!hasMore.current) return;
        const response = await fetchMovies(pageNo);
        pageNoRef.current = pageNo + 1;
        // Update the movie list in the store
        setMovies([...movieList, ...response.data]);
        // Set the first movie as active if it's the first page
        if (pageNo === 1) {
          setActiveMovie(response.data[0]);
        }
        // Mark as no more movies if the response has fewer than 10 items
        if (response.data.length < 10) {
          hasMore.current = false;
          return;
        }
      } catch (error) {
        console.warn("Error fetching movies:", error);
      }
    },
    [movieList, setMovies, setActiveMovie]
  );

  /**
   * Handles focus events for a movie card.
   *
   * @param {Movie} movie - The focused movie.
   * @param {number} index - The index of the focused movie.
   */
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

  /**
   * Handles rendering of additional items when the user scrolls.
   *
   * @param {Object} params - Parameters for the rendered items.
   * @param {number} params.visibleStopIndex - The index of the last visible item.
   */
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
      {/* Horizontal scrollable movie list */}
      <List
        className="flex justify-center items-center hide-scrollbar !w-full"
        height={320}
        itemCount={35}
        itemSize={220}
        overscanCount={1}
        width={window.innerWidth - movies.length * MOVIE_CARD_PADDING_LENGTH}
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

/**
 * MovieCardRenderer component.
 *
 * This component renders individual movie cards within the MovieRail.
 * It uses the `useFocusEffect` hook to manage focus behavior for each card.
 *
 * @param {ListChildComponentProps} props - The props for the renderer.
 * @returns {JSX.Element} - The rendered movie card or skeleton placeholder.
 */
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
