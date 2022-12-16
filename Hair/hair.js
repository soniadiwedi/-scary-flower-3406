import { footer } from "../components/navbar.js";

async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
    filteredMakeupData(data)
  }
func()
function filteredMakeupData(data){
   let filtered_makeup =  data.filter(el => el.category=="Hair");
  let data_div = document.getElementById("right_block")
  filtered_makeup.forEach((el)=>{
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

let Footer_part = document.getElementById("footer")
Footer_part.innerHTML=footer()