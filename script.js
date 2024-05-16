/** @format */

const users = [
  {
    username: 'SideIlGambero',
    email: 'davide_damico@me.com',
    password: '12345678',
    shit: {
      count: 0,
      time: '12:35',
      date: '14/05/2024',
    },
  },
  {
    username: 'Noemi',
    email: 'noemi_damato@me.com',
    password: '12345678',
    shit: {
      count: 7,
      time: '12:26',
      date: '16/02/2024',
    },
  },
];

function incrementShit(user) {
  user.shit.count++;
  user.shit.time = new Date().toLocaleTimeString();
  user.shit.date = new Date().toLocaleDateString();
}

function login() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = users.find(user => user.username === username || user.email === email);
  if (user && user.password === password) {
    console.log('Login avvenuto con sulCesso');
  }
}
