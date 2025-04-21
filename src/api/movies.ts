import { mockMovies } from "../data/MockMovies";
import { Movie } from "../type/Movie";

const MOVIES_PER_PAGE = 10;

export const fetchMovies = (page: number): Promise<{data:Movie[], total: number}> => {
  const start = (page - 1) * MOVIES_PER_PAGE;
  const end = start + MOVIES_PER_PAGE;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: mockMovies.slice(start, end), total: mockMovies.length});
    }, 3000); // 3 second delay
  });
};
