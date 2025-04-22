
/**
 * Mock movie data for development purposes.
 *
 * This file contains an array of movie objects, each representing a movie with the following properties:
 * - `id`: A unique identifier for the movie.
 * - `title`: The title of the movie.
 * - `posterUrl`: A URL to the movie's poster image.
 * - `year`: The release year of the movie.
 * - `description`: A brief description or synopsis of the movie.
 * - `genres`: An array of genres associated with the movie.
 * - `rating`: The movie's rating (on a scale of 1 to 5 or 1 to 10, depending on the context).
 *
 * This data is used to simulate API responses and populate UI components during development.
 */
import { Movie } from "../type/Movie";


export const mockMovies: Movie[] = [
  {
    id: "movie-card-1",
    title: "The Shawshank Redemption",
    posterUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    year: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genres: ["Drama"],
    rating: 9.3,
  },
  {
    id: "movie-card-2",
    title: "Pulp Fiction",
    posterUrl: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1024_.jpg",
    year: 1994,
    description: "The lives of two mob hitmen, a boxer, and others intertwine in a tale of violence and redemption.",
    genres: ["Crime", "Drama"],
    rating: 8.9,
  },
  {
    id: "movie-card-3",
    title: "Schindler's List",
    posterUrl: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    year: 1993,
    description: "In Nazi-occupied Poland, Oskar Schindler becomes concerned for his Jewish workforce.",
    genres: ["Biography", "Drama", "History"],
    rating: 8.9,
  },
  {
    id: "movie-card-4",
    title: "Fight Club",
    posterUrl: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    year: 1999,
    description: "An insomniac and a soap salesman form an underground fight club that evolves into something more.",
    genres: ["Drama"],
    rating: 8.8,
  },
  {
    id: "movie-card-5",
    title: "The Matrix",
    posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    year: 1999,
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
  },
  {
    id: "movie-card-6",
    title: "The Lord of the Rings: The Return of the King",
    posterUrl: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
    year: 2003,
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
    genres: ["Action", "Adventure", "Drama"],
    rating: 8.9,
  },
  {
    id: "movie-card-7",
    title: "The Lion King",
    posterUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SL1500_.jpg",
    year: 1994,
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    genres: ["Animation", "Adventure", "Drama"],
    rating: 8.5,
  },
  
  {
    id: "movie-card-8",
    title: "Avengers: Endgame",
    posterUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    year: 2019,
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
    genres: ["Action", "Adventure", "Drama"],
    rating: 8.4,
  },
  {
    id: 'movie-card-9',
    title: 'Brahmastra',
    posterUrl: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2022,
    description: 'A young man on a quest to find love discovers he has extraordinary powers rooted in ancient Indian mythology.',
    genres: ['Fantasy', 'Action', 'Adventure'],
    rating: 4
  },
  {
    id: 'movie-card-10',
    title: 'Kantara',
    posterUrl: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2022,
    description: 'A tribal man fights to protect his village and their sacred forest from mysterious forces and corrupt officials.',
    genres: ['Drama', 'Mystery', 'Folklore'],
    rating: 5
  },
  {
    id: 'movie-card-11',
    title: 'Thor: Love and Thunder',
    posterUrl: 'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2022,
    description: 'Thor enlists the help of Valkyrie, Korg, and ex-girlfriend Jane Foster to fight Gorr the God Butcher.',
    genres: ['Action', 'Comedy', 'Superhero'],
    rating: 3
  },
  {
    id: 'movie-card-12',
    title: 'Thor: Ragnarok',
    posterUrl: 'https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2017,
    description: 'Thor must fight for survival and race against time to prevent Ragnarök from destroying his home.',
    genres: ['Action', 'Adventure'],
    rating: 4
  },
  {
    id: 'movie-card-13',
    title: 'Avatar',
    posterUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2022,
    description: 'Return to the world of Pandora in this epic adventure about the Sully family and their new challenges.',
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    rating: 5
  },
  {
    id: 'movie-card-14',
    title: 'Pushpa',
    posterUrl: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2021,
    description: 'A laborer rises through the ranks of a red sandalwood smuggling syndicate, making both friends and foes.',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 4
  },
  {
    id: 'movie-card-15',
    title: 'Inception',
    posterUrl: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2010,
    description: 'A thief who enters the dreams of others to steal secrets is given a chance to regain his old life.',
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 5
  },
  {
    id: 'movie-card-16',
    title: 'The Dark Knight',
    posterUrl: 'https://images.pexels.com/photos/7234257/pexels-photo-7234257.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2008,
    description: 'Batman faces his greatest challenge as the Joker wreaks havoc and chaos on Gotham City.',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 5
  },
  {
    id: 'movie-card-17',
    title: 'Interstellar',
    posterUrl: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2014,
    description: 'A team of explorers travel through a wormhole in space in an attempt to save humanity.',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    rating: 5
  },
  {
    id: 'movie-card-18',
    title: 'The Godfather',
    posterUrl: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1972,
    description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    genres: ['Crime', 'Drama'],
    rating: 5
  },
  {
    id: 'movie-card-19',
    title: 'Spider-Man: No Way Home',
    posterUrl: 'https://images.pexels.com/photos/2747893/pexels-photo-2747893.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2021,
    description: 'Spider-Man seeks help from Doctor Strange to make his identity secret, but things go horribly wrong.',
    genres: ['Action', 'Adventure', 'Superhero'],
    rating: 4
  },
  {
    id: 'movie-card-20',
    title: 'The Matrix',
    posterUrl: 'https://images.pexels.com/photos/1612371/pexels-photo-1612371.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1999,
    description: 'A computer programmer discovers the shocking truth about his reality and his role in the war against machines.',
    genres: ['Sci-Fi', 'Action'],
    rating: 5
  },
  {
    id: 'movie-card-21',
    title: 'Pulp Fiction',
    posterUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1994,
    description: 'Various interconnected stories of Los Angeles criminals, small-time mobsters, and a mysterious briefcase.',
    genres: ['Crime', 'Drama'],
    rating: 5
  },
  {
    id: 'movie-card-22',
    title: 'The Shawshank Redemption',
    posterUrl: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1994,
    description: 'A banker, sentenced to life in Shawshank State Prison, never loses hope and befriends a fellow prisoner.',
    genres: ['Drama'],
    rating: 5
  },
  {
    id: 'movie-card-23',
    title: 'Jurassic Park',
    posterUrl: 'https://images.pexels.com/photos/3389722/pexels-photo-3389722.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1993,
    description: 'A theme park showcasing genetically recreated dinosaurs turns into a nightmare when the creatures escape.',
    genres: ['Adventure', 'Sci-Fi', 'Thriller'],
    rating: 4
  },
  {
    id: 'movie-card-24',
    title: 'The Silence of the Lambs',
    posterUrl: 'https://images.pexels.com/photos/3389725/pexels-photo-3389725.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1991,
    description: 'An FBI trainee seeks help from an imprisoned cannibalistic serial killer to catch another killer.',
    genres: ['Crime', 'Thriller'],
    rating: 5
  },
  {
    id: 'movie-card-25',
    title: 'Fight Club',
    posterUrl: 'https://images.pexels.com/photos/3389728/pexels-photo-3389728.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1999,
    description: 'An insomniac office worker forms an underground fight club that evolves into something much more.',
    genres: ['Drama', 'Thriller'],
    rating: 5
  },
  {
    id: 'movie-card-26',
    title: 'Goodfellas',
    posterUrl: 'https://images.pexels.com/photos/3389729/pexels-photo-3389729.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1990,
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners.',
    genres: ['Crime', 'Biography'],
    rating: 5
  },
  {
    id: 'movie-card-27',
    title: 'The Departed',
    posterUrl: 'https://images.pexels.com/photos/3389730/pexels-photo-3389730.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2006,
    description: 'An undercover cop and a mole in the police force attempt to identify each other while infiltrating an Irish gang.',
    genres: ['Crime', 'Thriller'],
    rating: 4
  },
  {
    id: 'movie-card-28',
    title: 'Schindler\'s List',
    posterUrl: 'https://images.pexels.com/photos/3389731/pexels-photo-3389731.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1993,
    description: 'A German businessman saves the lives of more than a thousand Jewish refugees during the Holocaust.',
    genres: ['Biography', 'Drama', 'Historical'],
    rating: 5
  },
  {
    id: 'movie-card-29',
    title: 'The Pianist',
    posterUrl: 'https://images.pexels.com/photos/3389732/pexels-photo-3389732.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2002,
    description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.',
    genres: ['Biography', 'Drama'],
    rating: 5
  },
  {
    id: 'movie-card-30',
    title: 'Back to the Future',
    posterUrl: 'https://images.pexels.com/photos/3389736/pexels-photo-3389736.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1985,
    description: 'A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend.',
    genres: ['Sci-Fi', 'Adventure', 'Comedy'],
    rating: 5
  },
  {
    id: 'movie-card-31',
    title: 'The Sixth Sense',
    posterUrl: 'https://images.pexels.com/photos/3389737/pexels-photo-3389737.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1999,
    description: 'A boy who communicates with spirits seeks the help of a disheartened child psychologist.',
    genres: ['Drama', 'Mystery', 'Thriller'],
    rating: 4
  },
  {
    id: 'movie-card-32',
    title: 'The Usual Suspects',
    posterUrl: 'https://images.pexels.com/photos/3389738/pexels-photo-3389738.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 1995,
    description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.',
    genres: ['Crime', 'Mystery', 'Thriller'],
    rating: 5
  },
  {
    id: 'movie-card-33',
    title: 'The Grand Budapest Hotel',
    posterUrl: 'https://images.pexels.com/photos/3389740/pexels-photo-3389740.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2014,
    description: 'A legendary concierge at a famous European hotel and his trusted lobby boy become embroiled in a murder mystery.',
    genres: ['Comedy', 'Drama'],
    rating: 4
  },
  {
    id: 'movie-card-34',
    title: 'The Shape of Water',
    posterUrl: 'https://images.pexels.com/photos/3389742/pexels-photo-3389742.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2017,
    description: 'A mute janitor forms a unique relationship with an amphibious creature being held in captivity.',
    genres: ['Fantasy', 'Drama', 'Romance'],
    rating: 4
  },
  {
    id: 'movie-card-35',
    title: 'Black Panther',
    posterUrl: 'https://images.pexels.com/photos/3389743/pexels-photo-3389743.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2018,
    description: 'T\'Challa, heir to the hidden kingdom of Wakanda, must step forward to lead his people into a new future.',
    genres: ['Action', 'Adventure', 'Superhero'],
    rating: 4
  },

];
