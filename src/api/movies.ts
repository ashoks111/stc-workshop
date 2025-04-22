import { MAX_ITEM_PER_PAGE } from "../config/constants";
import { mockMovies } from "../data/MockMovies";
import {  MovieResponse } from "../type/Movie";

/**
 * Simulates fetching a paginated list of movies from an API.
 *
 * @param {number} page - The page number to fetch.
 * @returns {Promise<MovieResponse>} A promise that resolves to a MovieResponse object containing:
 *   - `data`: An array of movies for the requested page.
 *   - `total`: The total number of movies available.
 *
 * Details:
 * - The function calculates the start and end indices for slicing the mock movie data
 *   based on the page number and the `MAX_ITEM_PER_PAGE` constant.
 * - A delay of 3 seconds is simulated using `setTimeout` to mimic a real API call.
 * - The mock data is sliced to return only the movies for the requested page.
 */

export const fetchMovies = (page: number): Promise<MovieResponse> => {
  const start = (page - 1) * MAX_ITEM_PER_PAGE;
  const end = start + MAX_ITEM_PER_PAGE;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: mockMovies.slice(start, end), total: mockMovies.length});
    }, 3000); // 3 second delay
  });
};
