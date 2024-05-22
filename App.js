/** @format */

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
  #session = null;
  #questions = new ControllerQuestions();
  #facts = new ControllerFacts();

  #userShits = [];

  register(username, email, password) {
    if (!!this.#session) return console.log('You are already logged in!');
    else return this.#users.addUser(username, email, password);
  }

  login(username, password) {
    if (!!this.#session) {
      return this.#session;
    } else {
      this.#session = this.#users.getUser(username, password);
      return this.#session;
    }
  }

  logout() {
    if (!!this.#session) this.#session = null;
    else console.log('You must be logged in!');
  }

  addFeedback(message, rating) {
    if (!this.#session) return console.log('You must be logged in!');
    else return this.#feedbacks.create(message, rating);
  }

  addShitCounter() {
    if (!this.#session) return console.log('You must be logged in!');
    else return this.#shitCounters.create();
  }

  increaseShitCounter() {
    if (!this.#session) return console.log('You must be logged in!');
    else {
      const newShitCounter = this.#shitCounters.create();
      this.#userShits.push({
        id: Math.random(),
        userId: this.#session.id,
        shitCounterId: newShitCounter.id,
      });
    }
  }

  addQuestion(question, answer) {
    return this.#questions.create(question, answer);
  }

  getMeme() {
    if (!this.#session) return console.log('You must be logged in!');
    else return this.#memes.getRandomMeme();
  }

  getFact() {
    if (!this.#session) return console.log('You must be logged in!');
    else return this.#facts.randomFact();
  }
}

const app = new App();

module.exports = App;
