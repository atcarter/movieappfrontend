class Review {
  static all = [];

  constructor({content, rating, username, id, movie_id}){
   this.content = content;
   this.rating = rating;
   this.username = username;
   this.id = id;
   this.movie_id = movie_id;
   this.element = document.createElement('li');
   this.element.id = `review-${this.id}`
   Review.all.push(this);
  }
  //need to remove the movies array from the reviews json

  showReview(){
    this.element.innerHTML = `
    <h4>${this.username} &emsp; &emsp; ${"*".repeat(this.rating)}</h4>
    <p>${this.content}</p>
    `
    let ul = document.getElementById(`movie-${this.movie_id}-reviews`);
    ul.appendChild(this.element);
  }
}