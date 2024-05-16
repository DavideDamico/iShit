/** @format */
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const shitButton = document.getElementById("shitting-btn");
const count = document.getElementById("shit-count");

const users = [
  {
    username: "SideIlGambero",
    email: "davide_damico@me.com",
    password: "12345678",
    shit: {
      count: 0,
      time: "12:35",
      date: "14/05/2024",
    },
  },
  {
    username: "Noemi",
    email: "noemi_damato@me.com",
    password: "12345678",
    shit: {
      count: 7,
      time: "12:26",
      date: "16/02/2024",
    },
  },
];

function incrementShit(user) {
  user.shit.count++;
  user.shit.time = new Date().toLocaleTimeString();
  user.shit.date = new Date().toLocaleDateString();
}

//Login account
function login() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    window.location.href = "user-home.html";
  }
}

// Register account
function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find(
    (user) => user.username === username || user.email === email
  );
  if (!user) {
    users.push({
      username,
      email,
      password,
    });
    console.log("Registrazione avvenuta con successo");
  }
}

addEventListener("load", () => {
  loginButton.addEventListener("click", login);
  registerButton.addEventListener("click", register);
});

addEventListener("load", () => {
  shitButton.addEventListener("click", () => {
    incrementShit(users[0]);
    count.innerHTML = users[0].shit.count;
  });
});
