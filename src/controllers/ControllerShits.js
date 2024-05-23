/** @format */
const ModelShit = require('../models/ModelShit');

class ControllerShits {
  #shits = [];

  create(userId) {
    const shit = new ModelShit(userId);
    this.#shits.push(shit);
    console.log(shit);
  }

  getUserShit(userId) {
    const userShits = this.#shits.reduce((accumulator, currentShit) => {
      if (currentShit.userId === userId) accumulator.push(currentShit);
      return accumulator;
    }, []);
    console.log(userShits);
    return userShits;
  }
}

module.exports = ControllerShits;
