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



//<--------FETCHING THE DATA FROM API---------->

async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
  //<---------INVOKING THE FUNCTION FOR CAROUSAL1 AND FILTERED DATA---------->  
    append(data)
    filterData(data)
  }
func();


//<--------CAROUSEL 1----------->
let i=4;
let carousel1_div = document.getElementById("carousel1")
let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];
function append(data){
  
      let AllData = [data[i],data[i+1],data[i+2],data[i+3]]
   let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
      card1.innerHTML = `<img src='${data[0].image}'></img>
                           Name:${data[0].name}<br>
                           Price:${data[0].price}
                         <br>  <button class="addToCart">Add to Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card2.innerHTML = `<img src="${data[1].image}"></img>
                            Name:${data[1].name}<br>
                           Price:${data[1].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card3.innerHTML = `<img src="${data[2].image}"></img>
                            Name:${data[2].name}<br>
                           Price:${data[2].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card4.innerHTML = `<img src="${data[3].image}"></img>
                           Name:${data[3].name}<br>
                           Price:${data[3].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;


                 ////Add to cart functionality 1
                 
                let addCart = document.querySelectorAll("#carousel1 button")
                addCart.forEach((el,index)=>{
                    el.addEventListener('click',(event)=>{
                        event.preventDefault()
                    if(index==0){
                        console.log(data[index]) 
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==1){
                        console.log(data[index]) 
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==2){
                        console.log(data[index]) 
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==3){
                        console.log(data[index])  
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                    }
                    })       
                    
                })

  setInterval(function (){
  
    if(i==20){
      i=0;
    }
  
      card1.innerHTML = `<img src='${data[i].image}'></img>
                            Name:${data[i].name}<br>
                           Price:${data[i].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card2.innerHTML = `<img src="${data[i+1].image}"></img>
                             Name:${data[i+1].name}<br>
                           Price:${data[i+1].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card3.innerHTML = `<img src="${data[i+2].image}"></img>
                            Name:${data[i+2].name}<br>
                           Price:${data[i+2].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;
      card4.innerHTML = `<img src="${data[i+3].image}"></img>
                            Name:${data[i+3].name}<br>
                           Price:${data[i+3].price}
                           <br>  <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img>`;

             ////add to cart functionality 2
      
    let addCart = document.querySelectorAll("#carousel1 button")
    addCart.forEach((el,index)=>{
       
      el.addEventListener('click',(event)=>{
            event.preventDefault()
         if(index==0){             
           console.log(data[index+i-1]) 
           cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))             
         }else if(index==1){
            console.log(data[index+i-1]) 
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
         }else if(index==2){
            console.log(data[index+i-1])
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))   
         }else if(index==3){
            console.log(data[index+i-1])
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))   
         }
      })
      
      
})



    i++;
  },7000)
  
         
}

console.log(cart_data)
/// If in ADDTOCART id same than gave alert



//<-----------FILTERED DATA APPENDING ON MAIN PAGE------------->

let filter_div = document.getElementById("filteredData")
function filterData(data){ 
  let makeup = document.getElementById("makeup1");
 
    
  //<--------Data on main page shown---------->
  let filteredData =  data.filter(el => el.category=="Make-up");     


 filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                        <p>Name:${filteredData[0].name}</p>
                         <p>Price:${filteredData[0].price}</p>
                         <button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                         <div><img src="${filteredData[1].image}">
                        <p>Name:${filteredData[1].name}</p>
                         <p>Price:${filteredData[1].price}</p>
                         <button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                         <div><img src="${filteredData[2].image}">
                        <p>Name:${filteredData[2].name}</p>
                         <p>Price:${filteredData[2].price}</p>
                         <button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                         <div><img src="${filteredData[3].image}">
                        <p>Name:${filteredData[3].name}</p>
                         <p>Price:${filteredData[3].price}</p>
                         <button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`

//<-------For makeup data while clicking------>
   makeup.addEventListener('click',()=>{    
      let filteredData =  data.filter(el => el.category=="Make-up");     
        filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
       })
//<--------For skin data while click---------->
       let skin = document.getElementById("skin1")
      skin.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Skin");
             filter_div.innerHTML = "";
          filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })
//<--------For hair data while click---------->      
      let hair = document.getElementById("hair1")
      hair.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Hair");
                filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })

//<--------For PersonalCare data while click---------->
    let PersonalCare = document.getElementById("personalCare1")
    PersonalCare.addEventListener('click',()=>{
      let filteredData=  data.filter(el => el.category=="Personal");
                  filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })

//<--------For mom&babyCare data while click---------->      
    let babyCare = document.getElementById("babyCare1")
    babyCare.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Mom Care");
                  filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })

//<--------For Ayurveda data while click---------->      
     let Ayurveda = document.getElementById("ayurveda1")
    Ayurveda.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Ayurveda");
                  filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })

//<--------For fregrance data while click---------->      
     let fregrance = document.getElementById("freg1")
      fregrance.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="fragrance");
                    filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`
      })


}






  // <----------- footer file imported from navbar.js....--------->
  let footer_Part=document.getElementById("footer");
  footer_Part.innerHTML=footer();
  