/** @format */

class ModelUser {
  constructor(username, email, password) {
    this.id = Math.random();
    this.username = username;
    this.email = email;
    this.password = this.encryptPassword(password);
  }

  encryptPassword(password) {
    return password;
  }
}

module.exports = ModelUser;
