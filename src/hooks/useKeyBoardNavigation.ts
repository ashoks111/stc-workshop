import { useEffect, useCallback, useMemo } from 'react';
import { useFocusStore } from '../store/useFocusableStore';
import { useMovieStore } from '../store/useMovieStore';
import { NavMenu, SideBarMenu } from '../data/Menu';
import { FocusKeyElemType, KeyDirection, KeyEventType } from '../type/FocusType';
export const useKeyboardNavigation = () => {
  
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const prevLeftMenu = useFocusStore((state) => state.prevLeftMenu);
  const prevMovieCard = useFocusStore((state) => state.prevMovieCard);
  const setFocusedKey = useFocusStore((state) => state.setFocusedKey);
  const setPrevLeftMenu = useFocusStore((state) => state.setPrevLeftMenu);
  const setPrevMovieCard = useFocusStore((state) => state.setPrevMovieCard);
  
  const movies = useMovieStore((state) => state.movies);
  
  // Memoize focusable keys to avoid recomputation
  const focusableKeys = useMemo(() => {
    const staticKeys = [
      ...SideBarMenu.map((menu) => menu.id),
      FocusKeyElemType.PLAY_BUTTON,
      ...NavMenu.map((menu) => menu.id),
    ];
    return [...staticKeys, ...movies.map((movie) => movie.id)];
  }, [movies]);

   // Helper function to get the next or previous key
   const getNextKey = useCallback(
    (currentKey: string, direction: KeyDirection) => {
      const currentIndex = focusableKeys.indexOf(currentKey);
      if (currentIndex === -1) return null;
  
      const nextIndex =
        direction === KeyDirection.NEXT ? currentIndex + 1 : currentIndex - 1;
      return focusableKeys[nextIndex] || null;
    },
    [focusableKeys] // Dependency array ensures this function is memoized based on focusableKeys
  );
 

  // Debounced key handler
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      switch (event.key) {
        case KeyEventType.ARROW_RIGHT:
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            const nextKey = getNextKey(focusedKey, KeyDirection.NEXT);
            if (nextKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
              setFocusedKey(nextKey);
              setPrevMovieCard(nextKey);
            }
          } else if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            const nextKey = getNextKey(focusedKey, KeyDirection.NEXT);
            if (nextKey?.startsWith(FocusKeyElemType.ICON)) {
              setFocusedKey(nextKey);
            }
          } else if (focusedKey?.startsWith(FocusKeyElemType.MENU)) {
            setPrevLeftMenu(focusedKey);
            setFocusedKey(movies[0]?.id);
          }
          break;

        case KeyEventType.ARROW_LEFT:
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            if (focusedKey === movies[0]?.id) {
              setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
              setPrevMovieCard(focusedKey);
            } else {
              const prevKey = getNextKey(focusedKey, KeyDirection.PREV);
              if (prevKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
                setFocusedKey(prevKey);
                setPrevMovieCard(prevKey);
              }
            }
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
          } else if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            const prevKey = getNextKey(focusedKey, KeyDirection.PREV);
            if (prevKey?.startsWith(FocusKeyElemType.ICON)) {
              setFocusedKey(prevKey);
            }
          }
          break;

        case KeyEventType.ARROW_UP:
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            setFocusedKey(FocusKeyElemType.PLAY_BUTTON);
            setPrevMovieCard(focusedKey);
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(NavMenu[0]?.id);
          } else if (
            focusedKey?.startsWith(FocusKeyElemType.MENU) &&
            focusedKey !== SideBarMenu[0]?.id
          ) {
            const prevKey = getNextKey(focusedKey, KeyDirection.PREV);
            if (prevKey?.startsWith(FocusKeyElemType.MENU)) {
              setFocusedKey(prevKey);
            }
          }
          break;

        case KeyEventType.ARROW_DOWN:
          if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            setFocusedKey(FocusKeyElemType.PLAY_BUTTON);
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(prevMovieCard || movies[0]?.id);
          } else if (
            focusedKey?.startsWith(FocusKeyElemType.MENU) &&
            focusedKey !== SideBarMenu[SideBarMenu.length - 1]?.id
          ) {
            const nextKey = getNextKey(focusedKey, KeyDirection.NEXT);
            if (nextKey?.startsWith(FocusKeyElemType.MENU)) {
              setFocusedKey(nextKey);
            }
          }
          break;

        case KeyEventType.ENTER:
          // Handle enter key
          break;

        default:
          break;
      }
    },
    [focusedKey, getNextKey, setFocusedKey, setPrevMovieCard, setPrevLeftMenu, movies, prevLeftMenu, prevMovieCard]
  );
  
  // Set up keyboard event listener
  useEffect(() => {
    const debouncedHandler = (event: KeyboardEvent) => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', debouncedHandler);

    return () => {
      window.removeEventListener('keydown', debouncedHandler);
    };
  }, [handleKeyDown]);
};