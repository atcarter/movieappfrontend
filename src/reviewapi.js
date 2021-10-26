class ReviewApi {
  constructor(port){
    this.port = port
  }

  getReviews(){
    fetch(this.port + `/reviews`)
    .then(response => response.json())
    .then(data => console.log(data))
  }
}