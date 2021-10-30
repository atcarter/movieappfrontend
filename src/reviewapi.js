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
    })
    .then(response => response.json())
    .then(data => {
      const rev = new Review(data);
      rev.showReview(); 
    })
  }

  deleteReview(event){
    debugger
    const reviewId = event.target.id.split('-')[1];
    event.target.parentElement.remove();
    fetch(this.port + `/reviews/${reviewId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(json => {
      alert(json.alert)
    });
  }
}