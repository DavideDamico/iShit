/** @format */

class ModelFeedback {
  constructor(message, rating) {
    this.id = Math.random();
    this.message = message;
    this.rating = rating;
  }
}

module.exports = ModelFeedback;
