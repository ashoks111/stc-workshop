import { useEffect, useCallback, useMemo } from 'react';
import { useFocusStore } from '../store/useFocusableStore';
import { useMovieStore } from '../store/useMovieStore';
import { NavMenu, SideBarMenu } from '../data/Menu';
import { FocusKeyElemType, KeyDirection, KeyEventType } from '../type/FocusType';
/**
 * Custom hook to handle keyboard navigation for a TV-like interface.
 *
 * This hook manages focusable elements and handles keyboard events (e.g., arrow keys, enter key)
 * to navigate through menus, movie cards, and other UI components.
 */
export const useKeyboardNavigation = () => {
  // Retrieve focus-related state and actions from the focus store
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const prevLeftMenu = useFocusStore((state) => state.prevLeftMenu);
  const prevMovieCard = useFocusStore((state) => state.prevMovieCard);
  const {setFocusedKey, setPrevLeftMenu, setPrevMovieCard} = useFocusStore((state) => state.actions);
  
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
 

  /**
   * Handles keyboard events to navigate through focusable elements.
   *
   * @param {KeyboardEvent} event - The keyboard event triggered by user input.
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      switch (event.key) {
        case KeyEventType.ARROW_RIGHT:
          // when focus on movie card
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            const nextKey = getNextKey(focusedKey, KeyDirection.NEXT);
            if (nextKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
              setFocusedKey(nextKey);
              setPrevMovieCard(nextKey);
            }
            // focus on top nav icon
          } else if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            const nextKey = getNextKey(focusedKey, KeyDirection.NEXT);
            if (nextKey?.startsWith(FocusKeyElemType.ICON)) {
              setFocusedKey(nextKey);
            }
            // focus on left sidebar menu
          } else if (focusedKey?.startsWith(FocusKeyElemType.MENU)) {
            setPrevLeftMenu(focusedKey);
            setFocusedKey(movies[0]?.id);
          }
          break;

        case KeyEventType.ARROW_LEFT:
          // when focus on movie card
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            // if focused item is the first movie card, set focus to the left menu
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
            // when focus on Play button
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
            // when focus on top nav icon
          } else if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            console.log("focusedKey", focusedKey);
            if(focusedKey === NavMenu[0]?.id) {
              setFocusedKey(prevLeftMenu ?? SideBarMenu[0]?.id);
            } else {
              const prevKey = getNextKey(focusedKey, KeyDirection.PREV);
              if (prevKey?.startsWith(FocusKeyElemType.ICON)) {
                setFocusedKey(prevKey);
              }
            }
          }
          break;

        case KeyEventType.ARROW_UP:
          // when focus on movie card
          if (focusedKey?.startsWith(FocusKeyElemType.MOVIE_CARD)) {
            setFocusedKey(FocusKeyElemType.PLAY_BUTTON);
            setPrevMovieCard(focusedKey);
            // when focus on Play Button
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(NavMenu[0]?.id);
            // when focus on Side bar menu
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
          // when focus on top nav icons
          if (focusedKey?.startsWith(FocusKeyElemType.ICON)) {
            setFocusedKey(FocusKeyElemType.PLAY_BUTTON);
            // when focus on play button
          } else if (focusedKey === FocusKeyElemType.PLAY_BUTTON) {
            setFocusedKey(prevMovieCard || movies[0]?.id);
            // when focus on side bar menu
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
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};