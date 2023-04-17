interface Movie {
  title: string;
  director: string;
  releaseYear: number;
  rating: number;
}

const movieList: Movie[] = [
  {
    title: "The Matrix",
    director: "The Wachowskis",
    releaseYear: 1999,
    rating: 9,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    rating: 8,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 10,
  },
];

function addMovie(movie: Movie): void {
  movieList.push(movie);
}

function deleteMovie(title: string): void {
  const index = movieList.findIndex((movie) => movie.title === title);
  if (index !== -1) {
    movieList.splice(index, 1);
  }
}

function getMovieByDirector(director: string): Movie[] {
  return movieList.filter((movie) => movie.director === director);
}

// test the functions
console.log("All movies:");
for (const movie of movieList) {
  console.log(`- ${movie.title}, rating: ${movie.rating}`);
}

addMovie({
  title: "Interstellar",
  director: "Christopher Nolan",
  releaseYear: 2014,
  rating: 9,
});
console.log("After adding Interstellar:");
console.log(getMovieByDirector("Christopher Nolan"));

deleteMovie("The Matrix");
console.log("After deleting The Matrix:");
console.log(getMovieByDirector("The Wachowskis"));

/**
 * Explanation:
 */
// We start by defining the Movie interface with the required properties. We then create an array of Movie objects called movieList that holds the initial movies.

// We implement the addMovie() function that takes a Movie object as input and adds it to the movieList array using the push() method.

// We implement the deleteMovie() function that takes a string as input representing the title of the movie to delete. It uses the findIndex() method to find the index of the movie with the given title, and then removes it using the splice() method.

// We implement the getMovieByDirector() function that takes a string as input representing the name of the director to filter by. It uses the filter() method to return a new array of movies that match the given director.

// We then test the functions by outputting the list of all movies and then adding, deleting, and filtering movies based on different criteria.
