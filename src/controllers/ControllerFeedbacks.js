/** @format */

const ModelFeedback = require('../models/ModelFeedback');

class ControllerFeedbacks {
  #feedbacks = [];

  create(message, rating) {
    const feedback = new ModelFeedback(message, rating);
    if (message === '' || rating === '') {
      return console.log('Please fill in all fields');
    } else if (rating < 1 || rating > 5) {
      return console.log('Rating must be between 1 and 5');
    } else {
      this.#feedbacks.push(feedback);
      return console.log(feedback);
    }
  }
  read(id) {
    const feedbackFound = this.#feedbacks.find(function (feedback) {
      if (feedback.id === id) return true;
      return false;
    });
    return feedbackFound;
  }
  update(id, message, rating) {}
  delete(id) {}
}

module.exports = ControllerFeedbacks;
