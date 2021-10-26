const port = `http://localhost:3000`;
const reviewCall = new ReviewApi(port);

reviewCall.getReviews();