/** @format */

class ModelQuestion {
  constructor(id, question, answer) {
    this.id = id;
    this.question = question;
    this.answer = answer;
  }

  changeQuestion(newQuestion) {
    this.question = newQuestion;
  }
}

module.exports = ModelQuestion;
