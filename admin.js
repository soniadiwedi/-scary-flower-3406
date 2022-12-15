// let x = document.createElement("div");
// let img=document.createElement("p")
// x.innerText = "Hi i am Anshuman";
// let y = document.querySelector("body");
// y.append(x);
// let arr = [];
// let data = fetch("https://63983f78fe03352a94c9bcf7.mockapi.io/getProducts/data")
//   .then((res) => res.json())
//   .then((data) => {
//     obj = data;
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//console.log("This console data", obj);

let addProductBtn = document.querySelector("#addProductButton");
addProductBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let obj = {};
  let allProductDetails = document.querySelectorAll(".inputLabel");
  for (let i = 0; i < allProductDetails.length - 1; i++) {
    obj[allProductDetails[i].id] = allProductDetails[i].value;
  }

  console.log(obj);
  addProduct(obj);
});
//Code for POST method to append data to our data base
async function addProduct(obj) {
  try {
    let productDetails = await fetch(
      "https://6398167e77359127a046d08d.mockapi.io/products",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (productDetails.ok) {
      alert("Data appended");
    }
  } catch (error) {
    alert("Bad request");
  }
}

// Code for displaying all the product data to our table

function createTabe(arr) {
  console.log("arr", arr);

  arr.forEach((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("button");

    td1.innerText = ele.name;
    td2.innerText = ele.price;
    td3.innerText = ele.image;
    td4.innerText = ele.category;
    td5.innerText = "Edit";
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

//Code for getting all the product and dispayig them in the table

async function displayTable() {
  try {
    let productDetails = await fetch(
      "https://6398167e77359127a046d08d.mockapi.io/products",
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let x = await productDetails.json();
    //console.log(x);
    createTabe(x);

    // if (productDetails.ok) {
    //   alert("Table Displayed");
    // }
  } catch (error) {
    console.log("error", error);
    alert("Bad request");
  }
}
displayTable();
