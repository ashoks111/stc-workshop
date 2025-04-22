import { create } from "zustand";
import { FocusStoreType } from "../type/FocusType";
/**
 * Zustand store to manage focus-related state for the application.
 *
 * This store is used to track the currently focused element, as well as the previously focused
 * elements in specific contexts (e.g., left menu, movie cards). It also provides actions to update
 * the focus state.
 */
export const useFocusStore = create<FocusStoreType>((set) => ({
   /** The key of the currently focused element. */
  focusedKey: 'movie-card-1',
  /** The key of the previously focused left menu item. */
  prevLeftMenu: 'menu-favourites',
  /** The key of the previously focused movie card. */
  prevMovieCard: 'movie-card-1',
  actions: {
    setFocusedKey: (key) =>set({ focusedKey: key }),
    setPrevLeftMenu: (key) => set({ prevLeftMenu: key }),
    setPrevMovieCard: (key) => set({ prevMovieCard: key }),
  }
}))