import { footer } from "../components/navbar.js";

async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
    filteredSkinData(data)
  }
func()
function filteredSkinData(data){
   let filtered_skin =  data.filter(el => el.category=="Skin");
  let data_div = document.getElementById("right_block")
  filtered_skin.forEach((el)=>{
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
}
// SORT FUNCTIONALITY..............
let pop=document.querySelector("#sort_price");
pop.addEventListener("change",function(){
 let selected=document.querySelector("#sort_price").value;
 if(selected=="High"){
   data.sort((a,b)=>b.price-a.price);
 }
 if(selected=="Low"){
   data.sort((a,b)=>b.price-a.price);
 }
 filteredMakeupData(data);
});
let Footer_part = document.getElementById("footer")
Footer_part.innerHTML=footer()