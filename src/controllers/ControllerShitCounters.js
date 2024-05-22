/** @format */
const ModelShitCounter = require('../models/ModelShitCounter');

class ControllerShitCounters {
  #counter = [];

  create() {
    const shitCounter = new ModelShitCounter();
    this.#counter.push(shitCounter);
    return shitCounter;
  }
}

module.exports = ControllerShitCounters;
