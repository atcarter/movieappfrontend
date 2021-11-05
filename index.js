const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);
const movieCall = new MovieApi(port);

//Create a search feature ex. "star" will show star wars 
//Need an input, button (Search), event listener (don't reload), on trigger filter using the searched parameters




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


const searchForm = document.getElementById('searchbar')
const searchText = document.getElementById('search')

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const filteredMovies = Movie.all.filter(val => {
    let title = val.title.toLowerCase();
    let typed = searchText.value.toLowerCase();
    if(title.includes(typed)){
      return val
    }
  });
  
  const movieDisplay = document.getElementById('movie-display-ul');
  while (movieDisplay.firstChild) {
    movieDisplay.removeChild(movieDisplay.firstChild)
  }
  
  filteredMovies.forEach(movie => {
    movie.showMovie();
  })
  
})

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

