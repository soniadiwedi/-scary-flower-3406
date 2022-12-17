let arr = [];
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("no").value;
  let password = document.getElementById("password").value;
  let Confirmpassword = document.getElementById("Cpassword").value;
  let obj = {
    firstName,
    lastName,
    email,
    number,
    password,
    Confirmpassword,
  };
  // console.log(obj)
  arr.push(obj);
  console.log(arr);

  localStorage.setItem("login", JSON.stringify(arr));
  window.location.href = "/login.html";
});
