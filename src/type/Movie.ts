

 export type MovieStore = {
    movies: Movie[]
    activeMovie: Movie | null
    totalMovies: number
    actions: {
      setActiveMovie: (movie: Movie) => void
      setMovies: (movies: Movie[]) => void
    }
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

  export type MovieRailProps =  {
    title: string;
    movies: Movie[];
    onMovieFocus?: (movie: Movie) => void;
  }

  export type MovieResponse = {
    data:Movie[],
    total: number
  }

  export type MovieCardProps = {
    movie: Movie;
    onFocus?: (movie: Movie) => void;
    index: number;
    elemRef?: React.Ref<HTMLDivElement>;
  };

  
  