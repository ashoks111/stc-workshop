import MovieDetails from "./components/Movie/MovieDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import { useMovieStore } from "./store/useMovieStore";
import MovieRail from "./components/Movie/MovieRail";
import { Movie } from "./type/Movie";
import { useKeyboardNavigation } from "./hooks/useKeyBoardNavigation";
import { useFocusStore } from "./store/useFocusableStore";
import { useCallback } from "react";

function App() {
  const activeMovie = useMovieStore((state) => state.activeMovie);
  const setActiveMovie = useMovieStore((state) => state.actions.setActiveMovie);
  const { setFocusedKey, setPrevMovieCard } = useFocusStore(
    (state) => state.actions
  );
  const movies = useMovieStore((state) => state.movies);
  useKeyboardNavigation();

  // Memoize the handleMovieSelect function
  const handleMovieSelect = useCallback(
    (movie: Movie) => {
      setActiveMovie(movie);
      setFocusedKey(movie.id);
      setPrevMovieCard(movie.id);
    },
    [setActiveMovie] // Dependencies for the memoized function
  );
  return (
    <main className="flex min-h-screen w-full bg-primary ">
      <Sidebar />
      <div className="flex-1 relative hide-scrollbar overflow-hidden">
        <div
          className="absolute inset-0 w-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${activeMovie?.posterUrl})`,
          }}
        />
        <div className="flex flex-col relative z-10 ">
          <TopNav />
          <MovieDetails />
          <MovieRail
            title="Trending Now"
            movies={movies}
            onMovieFocus={handleMovieSelect}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
