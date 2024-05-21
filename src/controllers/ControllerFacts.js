const ModelFacts = require('../models/ModelFacts');

class ControllerFacts {
    #facts = [];

    create(title, description) {
        const fact = new ModelFacts(title, description);
        this.#facts.push(fact);
        return { id: fact.id, title: fact.title, description: fact.description };
    }

    read(id) {
        const factFound = this.#facts.find(function (fact) {
            if (fact.id === id) return true;
            return false;
        });
        return factFound;
    }

    update(id, title, description) {
        const factFound = this.#facts.find(function (fact) {
            if (fact.id === id) return true;
            return false;
        });
        factFound.title = title;
        factFound.description = description;
        return { id: factFound.id, title: factFound.title, description: factFound.description };
    }

    delete(id) {
        const factFound = this.#facts.find(function (fact) {
            if (fact.id === id) return true;
            return false;
        });
        const index = this.#facts.indexOf(factFound);
        this.#facts.splice(index, 1);
    }
}

module.exports = ControllerFacts;