/** @format */

class ModelUser {
  constructor(username, email, password) {
    this.id = this.users.length + 1;
    this.username = username;
    this.email = email;
    this.password = this.encryptPassword(password);
  }

  encryptPassword(password) {}
}
