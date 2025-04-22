import { create } from 'zustand'
import { mockMovies } from '../data/MockMovies'
import { Movie, MovieStore } from '../type/Movie'

  
export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  activeMovie: null,
  totalMovies: mockMovies.length,
  actions: {
    setActiveMovie: (movie) => set({ activeMovie: movie }),
    setMovies: (movies: Movie[]) => set({ movies }),
  }
}))