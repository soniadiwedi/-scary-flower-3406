import { footer, header, navbar } from "./components/navbar.js";

let arr = JSON.parse(localStorage.getItem("login"));

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  //console.log("hi")
  console.log(arr);
  arr.forEach((el) => {
    if (email == el.email && password == el.password) {
      alert("login successful");
      window.location.href = "/index.html";
    } else {
      alert("wrong credentials");
    }
  });
});
let header_part = document.getElementById("header");
header_part.innerHTML = header();

let navbar_part = document.getElementById("navbar");
navbar_part.innerHTML = navbar();

let footer_Part = document.getElementById("footer");
footer_Part.innerHTML = footer();
