import { create } from 'zustand'
import { mockMovies } from '../data/MockMovies'
import { Movie, MovieStore } from '../type/Movie'

/**
* Zustand store to manage movie-related state for the application.
*
* This store is used to track the list of movies, the currently active movie, and the total number
* of movies. It also provides actions to update the movie-related state.
*/
export const useMovieStore = create<MovieStore>((set) => ({
  /** The list of movies currently available in the store. */
  movies: [],
  /** The currently active movie */
  activeMovie: null,
  totalMovies: mockMovies.length,
  actions: {
    setActiveMovie: (movie) => set({ activeMovie: movie }),
    setMovies: (movies: Movie[]) => set({ movies }),
  }
}))