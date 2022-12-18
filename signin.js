import { footer, header, navbar } from "./components/navbar.js";

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

let header_part = document.getElementById("header");
header_part.innerHTML = header();

let navbar_part = document.getElementById("navbar");
navbar_part.innerHTML = navbar();

let footer_Part = document.getElementById("footer");
footer_Part.innerHTML = footer();
