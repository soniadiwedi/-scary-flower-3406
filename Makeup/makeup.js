import { footer,navbar,headerInside } from "../components/navbar.js";

async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
    filteredMakeupData(data)
    sortingAllData(data)
  }
func()
function filteredMakeupData(data){
   let filtered_makeup =  data.filter(el => el.category=="Make-up");
  let data_div = document.getElementById("right_block")
  filtered_makeup.forEach((el)=>{
    let div = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.image;
    let p = document.createElement("p");
    p.innerHTML = `Name:${el.name.substring(0,30)}...`
    let p1 =document.createElement("p");
    p1.innerHTML = `Price:${el.price}`
    let btn = document.createElement("button")
    btn.innerText = "Add To Cart"
    let fav_img = document.createElement("img")
    fav_img.src="https://assets.ajio.com/static/img/wishlistIcon.svg"
    div.append(image,p,p1,btn,fav_img)
    data_div.append(div)
  })
}


//<-------for sorting data------->
function sortingAllData(data){
  // SORT FUNCTIONALITY..............
let pop=document.querySelector("#sort_price");
pop.addEventListener("change",function(event){
  
 let selected=document.querySelector("#sort_price").value;
 console.log(selected)
 let data_div = document.getElementById("right_block");
 if(selected=="Default"){
   window.location.reload()
 }
 else if(selected=="High"){  
  data_div.innerHTML = "";
   data.sort((a,b)=>b.price-a.price);
 }
 else if(selected=="Low"){
  data_div.innerHTML = "";
   data.sort((a,b)=>a.price-b.price);
 }
 
 data.forEach((el)=>{
  let div = document.createElement("div")
  let image = document.createElement("img")
  image.src = el.image;
  let p = document.createElement("p");
  p.innerHTML = `Name:${el.name}`
  let p1 =document.createElement("p");
  p1.innerHTML = `Price:${el.price}`
  let btn = document.createElement("button")
  btn.innerText = "Add To Cart"
  let fav_img = document.createElement("img")
  fav_img.src="https://assets.ajio.com/static/img/wishlistIcon.svg"
  div.append(image,p,p1,btn,fav_img)
  data_div.append(div)
})
});
}

let Footer_part = document.getElementById("footer")
Footer_part.innerHTML=footer()

let header_part = document.getElementById("header");
header_part.innerHTML = headerInside();

let navbar_part = document.getElementById("navbar");
navbar_part.innerHTML = navbar();