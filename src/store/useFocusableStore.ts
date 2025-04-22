import { create } from "zustand";
import { FocusStoreType } from "../type/FocusType";

export const useFocusStore = create<FocusStoreType>((set) => ({
  focusedKey: 'movie-card-1',
  prevLeftMenu: 'menu-favourites',
  prevMovieCard: 'movie-card-1',
  actions: {
    setFocusedKey: (key) =>set({ focusedKey: key }),
    setPrevLeftMenu: (key) => set({ prevLeftMenu: key }),
    setPrevMovieCard: (key) => set({ prevMovieCard: key }),
  }
}))