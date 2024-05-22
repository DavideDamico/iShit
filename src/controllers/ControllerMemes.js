const ModelMemes = require('../models/ModelMemes');

class ControllerMemes {
    #memes = [];

    create(title, url) {
        const meme = new ModelMemes(title, url);
        this.#memes.push(meme);
        return { id: meme.id, title: meme.title, url: meme.url };
    }

    read(id) {
        const memeFound = this.#memes.find(function (meme) {
            if (meme.id === id) return true;
            return false;
        });
        return memeFound;
    }

    update(id, title, url) {
        const memeFound = this.#memes.find(function (meme) {
            if (meme.id === id) return true;
            return false;
        });
        memeFound.title = title;
        memeFound.url = url;
        return { id: memeFound.id, title: memeFound.title, url: memeFound.url };
    }

    delete(id) {
        const memeFound = this.#memes.find(function (meme) {
            if (meme.id === id) return true;
            return false;
        });
        const index = this.#memes.indexOf(memeFound);
        this.#memes.splice(index, 1);
    }
}

module.exports = ControllerMemes;