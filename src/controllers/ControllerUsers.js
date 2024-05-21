/** @format */
const ModelUser = require("../models/ModelUser.js");

class ControllerUsers {
  #users = [];

  addUser(username, email, password) {
    const user = new ModelUser(username, email, password);
    this.#users.push(user);
    return { id: user.id, username: user.username, email: user.email };
  }

  getUser(username, password) {
    const userFound = this.#users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }

  getUsers() {
    return this.#users;
  }
}

module.exports = ControllerUsers;
