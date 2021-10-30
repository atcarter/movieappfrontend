class Movie {
  static all = [];

  constructor({id, title, year, synopsis, reviews}){
    this.id = id;
    this.title = title;
    this.year = year;
    this.synopsis = synopsis;
    this.reviews = reviews;
    this.element = document.createElement('li');
    this.element.id = `movie-${this.id}`
    Movie.all.push(this);
    this.element.addEventListener('click', function(event) {
      if(event.target.innerText === "Delete"){
        movieCall.deleteMovie(event);
      }
    })
  }

  showMovie(){
    this.element.innerHTML = `
    <button type=button id="movie-${this.id}-delete">Delete</button>
    <h2>${this.title} (${this.year})</h2> 
    <p>${this.synopsis}</p>
    <ul id="movie-${this.id}-reviews">
    </ul>
    `
    let ul = document.getElementById('movie-display-ul');
    ul.appendChild(this.element);

    let option = document.createElement('option');
    option.value = this.id;
    option.innerText = `${this.title}`
    selectMovie.appendChild(option);
  }
}
