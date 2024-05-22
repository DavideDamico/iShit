const ModelFeedback = require('../models/ModelFeedback');

class ControllerFeedbacks {
    #feedbacks = [];
    
    create(message, rating) {
        const feedback = new ModelFeedback(message, rating);
        return { id: feedback.id, message: feedback.message, rating: feedback.rating };
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