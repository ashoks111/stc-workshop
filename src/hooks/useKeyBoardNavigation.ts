import { useEffect, useCallback, useMemo } from 'react';
import { useFocusStore } from '../store/useFocusableStore';
import { useMovieStore } from '../store/useMovieStore';
import { NavMenu, SideBarMenu } from '../data/Menu';
export const useKeyboardNavigation = () => {
  
  const focusedKey = useFocusStore((state) => state.focusedKey);
  const prevLeftMenu = useFocusStore((state) => state.prevLeftMenu);
  const prevMovieCard = useFocusStore((state) => state.prevMovieCard);
  const setFocusedKey = useFocusStore((state) => state.setFocusedKey);
  const setPrevLeftMenu = useFocusStore((state) => state.setPrevLeftMenu);
  const setPrevMovieCard = useFocusStore((state) => state.setPrevMovieCard);
  
  const movies = useMovieStore((state) => state.movies);
  
  const focusableKeys = useMemo(
    () => [ ...SideBarMenu.map((menu) => menu.id),"play-button", ...NavMenu.map((menu) => menu.id),  ...movies.map((movie) => movie.id),],
    [movies]
  );
 

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight': 
        event.preventDefault();
           // if it is in rail
          if (focusedKey?.startsWith("movie-card-")) {
            const currentIndex = focusableKeys.indexOf(focusedKey);
            const nextIndex = (currentIndex + 1);
            const nextKey = focusableKeys[nextIndex];
            if(nextKey?.startsWith("movie-card-")){
              setFocusedKey(nextKey);
              setPrevMovieCard(nextKey)
            }
          }
          // if in top - nav
          else if(focusedKey?.startsWith("icon-")) {
            const currentIndex = focusableKeys.indexOf(focusedKey);
            const nextIndex = (currentIndex + 1);
            const nextKey = focusableKeys[nextIndex];
            if(nextKey?.startsWith("icon-")){
              setFocusedKey(nextKey);
            }
          }
          // if in left nav
          else if(focusedKey?.startsWith("menu-")) {
            setPrevLeftMenu(focusedKey);
            setFocusedKey(movies[0]?.id);
          }

          break;
        case 'ArrowLeft':
        event.preventDefault();
       
        if (focusedKey?.startsWith("movie-card-")) {
          if(focusedKey === movies[0]?.id){
            setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
            setPrevMovieCard(focusedKey);
          } else {
            const currentIndex = focusableKeys.indexOf(focusedKey);
            const nextIndex = (currentIndex - 1);
            const nextKey = focusableKeys[nextIndex];
            if(nextKey?.startsWith("movie-card-")){
              setFocusedKey(nextKey);
              setPrevMovieCard(nextKey)
            }
          }
         
        } else if(focusedKey ==="play-button"){
          setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
        } else if (focusedKey?.startsWith("icon-")) {
          if(focusedKey === NavMenu[0]?.id){
            setFocusedKey(prevLeftMenu ?? NavMenu[0]?.id);
          } else {
            const currentIndex = focusableKeys.indexOf(focusedKey);
            const nextIndex = (currentIndex - 1);
            const nextKey = focusableKeys[nextIndex];
            if(nextKey?.startsWith("icon-")){
              setFocusedKey(nextKey);
            }
          }
        }

          break;
        case 'ArrowUp':
        event.preventDefault();
        if (focusedKey?.startsWith("movie-card-")) {
            setFocusedKey('play-button');
            setPrevMovieCard(focusedKey);
        } else if (focusedKey === 'play-button') {
          setFocusedKey(NavMenu[0]?.id);
        } else if (focusedKey?.startsWith("menu-") && focusedKey !== SideBarMenu[0]?.id) {
          const currentIndex = focusableKeys.indexOf(focusedKey);
          const nextIndex = (currentIndex - 1);
          const nextKey = focusableKeys[nextIndex];
          if(nextKey?.startsWith("menu-")){
            setFocusedKey(nextKey);
          }
        }
          // Handle up arrow key
          break;
        case 'ArrowDown':
        event.preventDefault();
            if (focusedKey?.startsWith("icon-")) {
              setFocusedKey('play-button');
          } else if (focusedKey === 'play-button') {
            setFocusedKey(prevMovieCard || movies[0]?.id);
          } else if (focusedKey?.startsWith("menu-") && focusedKey !== SideBarMenu[SideBarMenu.length - 1]?.id) {
            const currentIndex = focusableKeys.indexOf(focusedKey);
            const nextIndex = (currentIndex + 1);
            const nextKey = focusableKeys[nextIndex];
            if(nextKey?.startsWith("menu-")){
              setFocusedKey(nextKey);
            }
          }
          // Handle down arrow key
          break;
        case 'Enter':
        event.preventDefault();

          // Handle enter key
          break;
        default:
          break;
      }
    },
    [focusableKeys, focusedKey, setFocusedKey]
  );

  // Set up keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};