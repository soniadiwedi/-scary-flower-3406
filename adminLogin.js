//code for matching the admin userID and Admin password

let admin_login_btn = document.querySelector("#adminLoginBtn");
admin_login_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let admin_login_input = document.querySelectorAll("form input");
  let username = admin_login_input[0].value;
  let password = admin_login_input[1].value;
  if (username == "singh" && password == "singh") {
    window.location.href = "./admin.html";
  } else {
    alert("Wrong ID or password");
  }
  console.log(username);
  console.log("I am being clicked");
});
