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

//code for collecting inputs from form update section and storing them in a obj

let addProductBtn = document.querySelector("#addProductButton");
addProductBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let obj = {};
  let allProductDetails = document.querySelectorAll(".inputLabel");
  for (let i = 0; i < allProductDetails.length - 1; i++) {
    obj[allProductDetails[i].id] = allProductDetails[i].value;
  }

  //console.log(obj);
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
      alert("Data Appended");
    }
  } catch (error) {
    alert("Bad Request");
  }
}

// Code for displaying all the product data to our table
let model = document.querySelector("#itemEditModel");
let td5;
let td6;
function createTable(arr) {
  console.log("arr", arr);
  document.querySelector("tbody").innerHTML = "";
  arr.forEach((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let edit_btn = document.createElement("button");

    edit_btn.innerText = "Edit";
    edit_btn.addEventListener("click", () => {
      console.log(ele);
      model.style.display = "block";
      let all_model_input = document.querySelectorAll(
        "#itemEditModelContent form input"
      );
      all_model_input[0].value = ele.name;
      all_model_input[1].value = ele.price;
      all_model_input[2].value = ele.image;
      all_model_input[3].value = ele.id;
      //console.log(all_model_input);
    });
    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", () => {
      console.log("delete btn got clicked", ele.id);
      deleteProduct(ele.id);
    });
    td5 = document.createElement("td");

    td6 = document.createElement("td");

    td1.innerText = ele.name;
    td2.innerText = ele.price;
    td3.innerText = ele.image.substring(0, 20);
    //console.log(str.substring(1, 3));

    td4.innerText = ele.category;
    td5.append(edit_btn);
    //td5.setAttribute("class", "td5");

    td6.append(delete_btn);

    tr.append(td1, td2, td3, td4, td5, td6);
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
    createTable(x);

    // if (productDetails.ok) {
    //   alert("Table Displayed");
    // }
  } catch (error) {
    console.log("error", error);
    alert("Bad request");
  }
}
displayTable();

//code for editing the table and making the model appear.
//let all_button = document.querySelectorAll(".td5");

//Display model testing
// let displayModelBtn = document.querySelector("#displayModel");
// let model = document.querySelector("#itemEditModel");
// displayModelBtn.addEventListener("click", (event) => {
//   console.log("display btn got clicked");
//   model.style.display = "block";
// });

// window.onclick = function (event) {
//   if (event.target == modal) {
//     model.style.display = "none";
//   }
// };

//code for collecting data from modalform

let edit_Product = document.querySelector("#editProduct");
edit_Product.addEventListener("click", (event) => {
  event.preventDefault();
  let model_obj = {};
  let model_input = document.querySelectorAll(".modelInput");
  //console.log(model_input);
  for (let i = 0; i < model_input.length - 1; i++) {
    model_obj[model_input[i].id] = model_input[i].value;
  }
  let model_input_id = model_input[3].value;

  console.log(model_obj, model_input_id);
  editProduct(model_input_id, model_obj);
  //addProduct(obj);
});

async function editProduct(id, model_obj) {
  try {
    let x = await fetch(
      `https://6398167e77359127a046d08d.mockapi.io/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(model_obj),
      }
    );
    model.style.display = "none";
    window.location.reload();
    //displayTable();
  } catch (error) {
    console.log("Bad request");
  }
}

//code for deleting an element from table

async function deleteProduct(id) {
  try {
    let x = await fetch(
      `https://6398167e77359127a046d08d.mockapi.io/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    window.location.reload();
    //displayTable();
  } catch (error) {
    console.log("Bad request for deleting");
  }
}

//code for the pagination
///blogs?page=1&limit=10
let selectBox = document.querySelector("#itemPerPage").value;

async function paginateProduct(page) {
  try {
    let productDetails = await fetch(
      `https://6398167e77359127a046d08d.mockapi.io/products?page=${page}&limit=${selectBox}`,
      {
        method: "GET",
        //body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let y = await productDetails.json();
    console.log(y);
    createTable(y);
    if (productDetails.ok) {
      alert("Data appended");
    }
  } catch (error) {
    alert("Bad request");
  }
}
//paginateProduct();
