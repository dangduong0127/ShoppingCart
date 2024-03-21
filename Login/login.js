function Login() {
  event.preventDefault();
  let username = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let data = JSON.parse(localStorage.getItem("username"));
  let users = null;

  for (let i = 0; i < data.length; i++) {
    const currentUser = data[i];
    if (username === currentUser.email && pass === currentUser.password) {
      users = currentUser;
      break;
    }
  }
  if (users) {
    localStorage.setItem("LoggedInUser", username);
    window.location = "../index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!!!");
  }
  CheckIfLoggedIn();
}

function CheckIfLoggedIn() {
  let loggedInUser = localStorage.getItem("LoggedInUser");
  if (loggedInUser) {
    window.location = "../Account/acc.html";
  }
}

CheckIfLoggedIn();
