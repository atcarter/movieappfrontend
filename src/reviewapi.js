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

  createReview(){
    fetch(this.port + `/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: reviewUser.value,
        rating: reviewRating.value,
        content: reviewContent.value,
        movie_id: selectMovie.value
      })
    });
  }
}