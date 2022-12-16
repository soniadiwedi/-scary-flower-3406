import { footer } from "./components/navbar.js";


let carousel_div = document.querySelector(".carousal");

function carousel(){
  let img1 = `https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg`
  let img2 = `https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg`
  let img3 = `https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg`
  
  let images = [img1,img2,img3];
  let imgElement = document.createElement("img");
  imgElement.src = images[0];
      carousel_div.append(imgElement)
   let i=1;
  setInterval(function () {
    if(i==images.length){
        i=0;
    }
    imgElement.src = images[i];
     carousel_div.append(imgElement)
    i++;
  },3000)
}
carousel();



//<--------CAROUSEL 1----------->

async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
    append(data)
  }
func();

let i=4;
let carousel1_div = document.getElementById("carousel1")
function append(data){
  
      let AllData = [data[i],data[i+1],data[i+2],data[i+3]]
   let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
      card1.innerHTML = `<img src='${data[0].image}'></img>
                           Name:${data[0].name}<br>
                           Price:${data[0].price}
                         <br>  <button class="addToCart">Add to Cart</button>`;
      card2.innerHTML = `<img src="${data[1].image}"></img>
                            Name:${data[1].name}<br>
                           Price:${data[1].price}
                           <br>  <button>Add to Cart</button>`;
      card3.innerHTML = `<img src="${data[2].image}"></img>
                            Name:${data[2].name}<br>
                           Price:${data[2].price}
                           <br>  <button>Add to Cart</button>`;
      card4.innerHTML = `<img src="${data[3].image}"></img>
                           Name:${data[3].name}<br>
                           Price:${data[3].price}
                           <br>  <button>Add to Cart</button>`;
  setInterval(function (){
  
    if(i==20){
      i=0;
    }
  
      card1.innerHTML = `<img src='${data[i].image}'></img>
                            Name:${data[i].name}<br>
                           Price:${data[i].price}
                           <br>  <button>Add to Cart</button>`;
      card2.innerHTML = `<img src="${data[i+1].image}"></img>
                             Name:${data[i+1].name}<br>
                           Price:${data[i+1].price}
                           <br>  <button>Add to Cart</button>`;
      card3.innerHTML = `<img src="${data[i+2].image}"></img>
                            Name:${data[i+2].name}<br>
                           Price:${data[i+2].price}
                           <br>  <button>Add to Cart</button>`;
      card4.innerHTML = `<img src="${data[i+3].image}"></img>
                            Name:${data[i+3].name}<br>
                           Price:${data[i+3].price}
                           <br>  <button>Add to Cart</button>`;
    i++;
  },7000)
  
         
}


  //  footer file imported from navbar.js....
  let footer_Part=document.getElementById("footer")
  console.log(footer());
  footer_Part.innerHTML=footer();
  