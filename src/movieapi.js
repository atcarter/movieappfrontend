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


}