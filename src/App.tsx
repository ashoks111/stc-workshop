import MovieDetails from "./components/MovieDetails";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import { useMovieStore } from "./store/useMovieStore";
import MovieRail from "./components/MovieRail";
import { Movie } from "./type/Movie";
import { useKeyboardNavigation } from "./hooks/useKeyBoardNavigation";

function App() {
  const activeMovie = useMovieStore((state) => state.activeMovie);
  const movies = useMovieStore((state) => state.movies);
  useKeyboardNavigation();

  const handleMovieSelect = (movie: Movie) => {
    const setActiveMovie = useMovieStore.getState().setActiveMovie;
    setActiveMovie(movie);
  };
  return (
    <div className="flex min-h-screen w-full bg-primary ">
      <Sidebar />
      <main className="flex-1 relative hide-scrollbar overflow-hidden">
        <div
          className="absolute inset-0  bg-cover bg-center opacity-20"
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
      </main>
    </div>
  );
}

export default App;
