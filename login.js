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
