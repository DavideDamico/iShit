const ControllerUsers = require('./src/controllers/ControllerUsers');
const ControllerFeedbacks = require('./src/controllers/ControllerFeedbacks');
const ControllerShitCounters = require('./src/controllers/ControllerShitCounters');
const ControllerMemes = require('./src/controllers/ControllerMemes');
const ControllerQuestions = require('./src/controllers/ControllerQuestions');
const ControllerFacts = require('./src/controllers/ControllerFacts');

class App {
    #users = new ControllerUsers();
    #feedbacks = new ControllerFeedbacks();
    #shitCounters = new ControllerShitCounters();
    #memes = new ControllerMemes();
    #authenticatedUser = null;
    #questions = new ControllerQuestions();
    #facts = new ControllerFacts();

    register(username, email, password) {
        return this.#users.addUser(username, email, password);
    }

    login(username, password) {
        this.#authenticatedUser = this.#users.getUser(username, password);
        return this.#authenticatedUser;
    }

    logout() {
        this.#authenticatedUser = null;
    }

    getAuthenticatedUser() {
        return this.#authenticatedUser;
    }

    addFeedback(message, rating) {
        return this.#feedbacks.create(message, rating);
    }

    getFeedback(id) {
        return this.#feedbacks.read(id);
    }

    addShitCounter() {
        return this.#shitCounters.create();
    }

    addQuestion(question, answer) {
        return this.#questions.create(question, answer);
    }

    getQuestion(id) {
        return this.#questions.read(id);
    }

    addMeme(title, url) {
        return this.#memes.create(title, url);
    }

    getMeme(id) {
        return this.#memes.read(id);
    }

    addFact(title, description) {
        return this.#facts.create(title, description);
    }

    getFact(id) {
        return this.#facts.read(id);
    }
}

const app = new App();

module.exports = App;
