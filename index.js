const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);
const movieCall = new MovieApi(port);



const reviewForm = document.getElementById('review-form');
const reviewUser = document.getElementById('username');
const reviewRating = document.getElementById('rating');
const reviewContent = document.getElementById('content');
const selectMovie = document.getElementById('select-movie');

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();
  reviewCall.createReview();
  event.target.reset();
});

const movieForm = document.getElementById('movie-form');
const movieTitle = document.getElementById('title');
const movieYear = document.getElementById('year');
const movieSynopsis = document.getElementById('synopsis');

movieForm.addEventListener('submit', function(event) {
  event.preventDefault();
  movieCall.createMovie();
  event.target.reset();
});

movieCall.getMovies();
reviewCall.getReviews();

