/** @format */

const ModelFact = require('../models/ModelFact');

class ControllerFacts {
  // #facts = [];

  randomFact() {
    const fact = new ModelFact();
    return console.log(fact.getRandomFact());
  }
}

module.exports = ControllerFacts;
