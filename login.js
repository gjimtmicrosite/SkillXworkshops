function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "student" && password === "1234") {
    localStorage.setItem("studentName", username);
    window.location.href = "dashboard.html"; // OPEN DASHBOARD
  } else {
    document.getElementById("error").innerText = "Invalid login credentials";
  }
}
