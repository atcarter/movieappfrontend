const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);
const movieCall = new MovieApi(port);

reviewCall.getReviews();
movieCall.getMovies();