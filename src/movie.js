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
  }

  showMovie(){
    this.element.innerHTML = `
    <h2>${this.title} (${this.year})&emsp;<button type=button id="movie-${this.id}-delete">Delete</button></h2> 
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
