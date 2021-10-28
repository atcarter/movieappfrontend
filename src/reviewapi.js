class ReviewApi {
  constructor(port){
    this.port = port
  }

  getReviews(){
    fetch(this.port + `/reviews`)
    .then(response => response.json())
    .then(data => {
      data.forEach(review => {
        let r = new Review(review)
        r.showReview()
      })
    })
  }
}