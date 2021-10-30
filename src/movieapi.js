class MovieApi {
  constructor(port){
    this.port = port;
  }

  getMovies(){
    fetch(this.port + `/movies`)
    .then(response => response.json())
    .then(data => {
      data.forEach(movie => {
        let m = new Movie(movie);
        m.showMovie();
      })
    })
  }

  createMovie(){
    fetch(this.port + `/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: movieTitle.value,
        year: movieYear.value,
        synopsis: movieSynopsis.value
      })
    })
    .then(response => response.json())
    .then(data => {
      const mov = new Movie(data);
      mov.showMovie(); 
    })
  }

  deleteMovie(event){
    const movieId = event.target.id.split('-')[1];
    event.target.parentElement.remove();
    fetch(this.port + `/movies/${movieId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(json => {
      alert(json.alert)
    });
  }


}