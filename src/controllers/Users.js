/** @format */

class ControllerUsers {
  users = [];

  addUser(username, email, password) {
    const user = new ModelUser(username, email, password);
    this.users.push(user);
  }
}
