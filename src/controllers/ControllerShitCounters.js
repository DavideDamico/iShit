/** @format */
const ModelShitCounter = require('../models/ModelShitCounter');

class ControllerShitCounters {
  #counter = [];

  create(counter, date, time) {
    const shitCounter = new ModelShitCounter(counter, date, time);
    this.#counter.push(shitCounter);
    return { id: shitCounter.id, counter: shitCounter.counter, date: shitCounter.date, time: shitCounter.time };
  }

  increaseCounter(counter, date, time) {
    const shitCounter = new ModelShitCounter(counter, date, time);
    this.#counter.push(shitCounter);
  }
}

module.exports = ControllerShitCounters;
