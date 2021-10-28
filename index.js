const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);
const movieCall = new MovieApi(port);

const reviewForm = document.getElementById('review-form');
const selectMovie = document.getElementById('select-movie');
reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

});

const movieForm = document.getElementById('movie-form');
movieForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
});




reviewCall.getReviews();
movieCall.getMovies();