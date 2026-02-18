const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzKeehk1UXoe9UaWPhjHlh4qNY-5F2QvzfJjkYLklWefvwt7OTDwvV_xugWiQHWcZQ/exec";

function login(){
  const errorBox = document.getElementById("error");
  errorBox.innerText = "";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!username || !password){
    errorBox.innerText = "Please enter username & password";
    return;
  }

  const formData = new URLSearchParams({
    action: "login",
    username,
    password
  });

  fetch(WEB_APP_URL, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      localStorage.setItem("student", JSON.stringify(data.student));
      window.location.href = "dashboard.html";
    } else {
      errorBox.innerText = "Invalid username or password";
    }
  })
  .catch(() => {
    errorBox.innerText = "Server error. Please try again.";
  });
}
