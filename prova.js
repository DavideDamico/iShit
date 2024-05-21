/** @format */
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const shitButton = document.getElementById('shitting-btn');
const count = document.getElementById('shit-count');

class Users {
  constructor() {
    this.users = [];
  }

  addUser(username, email, password) {
    const user = {
      id: this.users.length + 1,
      username,
      email,
      password: this.encryptPassword(password),
    };
    this.users.push(user);
  }

  encryptPassword(password) {
    // Implementa qui la logica di crittografia della password
    return password;
  }
}

class Feedbacks {
  constructor() {
    this.id = null;
    this.username = null;
    this.message = null;
    this.rating = null;
  }
}

class ShitCounter {
  constructor() {
    this.id = null;
    this.username = null;
    this.counter = null;
    this.time = new Date().toLocaleTimeString();
    this.date = new Date().toLocaleDateString();
  }
}

// Aumenta il contatore di 1 al click del bottone
const userShit = new ShitCounter();

function incrementShit(counterDisplay) {
  userShit.counter++;
  counterDisplay = userShit.counter;
}

//Login account
function login() {
  const username = document.getElementById('username').value;

  const password = document.getElementById('password').value;
  const user = users.find(user => user.username === username);
  if (user && user.password === password) {
    window.location.href = 'user-home.html';
  } else {
    alert('Dati errati');
  }
}

// Register account
function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = users.find(user => user.username === username || user.email === email);
  if (!user) {
    users.push({
      username,
      email,
      password,
    });
    console.log('Registrazione avvenuta con successo');
  }
}

addEventListener('load', () => {
  loginButton.addEventListener('click', login);
  registerButton.addEventListener('click', register);
});

addEventListener('load', () => {
  shitButton.addEventListener('click', () => {
    incrementShit();
    count.innerHTML = users[0].shit.count;
  });
});
