

 export type MovieStore = {
    movies: Movie[]
    activeMovie: Movie | null
    setActiveMovie: (movie: Movie) => void
    setMovies: (movies: Movie[]) => void
    totalMovies: number
  }

  export type Movie = {
    id: string;
    title: string;
    posterUrl: string;
    year: number;
    description: string;
    genres: string[];
    rating: number;
  }