class ModelMeme {
    constructor(id, name, url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }

    changeName(newName) {
        this.name = newName;
    }

    changeUrl(newUrl) {
        this.url = newUrl;
    }
}

module.exports = ModelMeme;