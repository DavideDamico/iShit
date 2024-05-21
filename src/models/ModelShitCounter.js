/** @format */

class ModelShitCounter {
  constructor(counter, date, time) {
    this.id = Math.random();
    this.counter = counter;
    this.date = date;
    this.time = time;
  }

  increaseCounter() {
    this.counter++;
  }
}

module.exports = ModelShitCounter;
