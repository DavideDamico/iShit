const ModelQuestion = require('../models/ModelQuestion');

class ControllerQuestions {
    #questions = [];

    create(question, answer) {
        const newQuestion = new ModelQuestion(question, answer);
        this.#questions.push(newQuestion);
        return { id: newQuestion.id, question: newQuestion.question, answer: newQuestion.answer };
    }

    read(id) {
        const questionFound = this.#questions.find(function (question) {
            if (question.id === id) return true;
            return false;
        });
        return questionFound;
    }

    update(id, question, answer) {
        const questionFound = this.#questions.find(function (question) {
            if (question.id === id) return true;
            return false;
        });
        questionFound.changeQuestion(question);
        questionFound.changeAnswer(answer);
        return { id: questionFound.id, question: questionFound.question, answer: questionFound.answer };
    }

    delete(id) {
        const questionFound = this.#questions.find(function (question) {
            if (question.id === id) return true;
            return false;
        });
        const index = this.#questions.indexOf(questionFound);
        this.#questions.splice(index, 1);
    }
}

module.exports = ControllerQuestions;