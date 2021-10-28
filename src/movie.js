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
    <h2>${this.title} (${this.year})</h2>
    <p>${this.synopsis}</p>
    `
    let ol = document.getElementById('movie-display-ul');
    ol.appendChild(this.element);
  }
}
