import Typography from "../common/Typography";
import Tag from "../common/Tag";
import { useMovieStore } from "../../store/useMovieStore";
import PlayButton from "../common/PlayButton";

const MovieDetails = () => {
  const activeMovie = useMovieStore((state) => state.activeMovie);

  return (
    <div className="flex flex-1 justify-end px-6 py-3 pt-0  ">
      <div className="flex flex-col max-w-3xl gap-2">
        <div className="flex items-baseline space-x-4">
          <Typography tag="h4" className="!text-4xl font-bold text-white">
            {activeMovie?.title}
          </Typography>
          <div className="flex space-x-1">
            {"★★★☆☆".split("").map((star, i) => (
              <Typography
                tag="span"
                className="!text-xl font-bold text-white"
                key={i}
              >
                {star}
              </Typography>
            ))}
          </div>
        </div>
        <Typography tag="h6" className="text-white/80 text-xl ">
          {activeMovie?.year}
        </Typography>
        <Typography
          tag="p"
          className="text-white/90 text-lg max-w-2xl leading-relaxed"
        >
          {activeMovie?.description}
        </Typography>

        <div className="flex flex-wrap gap-4">
          {activeMovie?.genres.map((genre) => (
            <Tag key={genre} tagName={genre} />
          ))}
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default MovieDetails;
