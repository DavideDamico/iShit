/** @format */
const ModelUser = require('../models/ModelUser');

class ControllerUsers {
  #users = [];

  addUser(username, email, password) {
    if (this.#users.find(user => user.username === username)) {
      return console.log('Username already exists');
    } else if (this.#users.find(user => user.email === email)) {
      return console.log('Email already exists');
    } else {
      const user = new ModelUser(username, email, password);
      this.#users.push(user);
      console.log('User registered successfully!');
      return { id: user.id, username: user.username, email: user.email };
    }
  }

  getUser(username, password) {
    const userFound = this.#users.find(function (user) {
      if (user.username === username && user.password === password) {
        console.log('User logged in successfully!');
        return true;
      } else {
        console.log('Invalid username or password');
        return false;
      }
    });
    return userFound;
  }

  getUsers() {
    return this.#users;
  }
}

module.exports = ControllerUsers;
