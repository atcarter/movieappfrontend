const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);
const movieCall = new MovieApi(port);

const reviewForm = document.getElementById('review-form');
const selectMovie = document.getElementById('select-movie');
const movieForm = document.getElementById('movie-form');


reviewCall.getReviews();
movieCall.getMovies();