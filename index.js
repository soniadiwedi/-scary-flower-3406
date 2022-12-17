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
// let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
// let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[]
 function append(data){
  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
      let AllData = [data[i],data[i+1],data[i+2],data[i+3]]
   let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
      card1.innerHTML = `<img src='${data[0].image}'></img>
                          <b>Name</b>:${data[0].name.substring(0,40)}...<br>
                           <b>Price</b>:₹${data[0].price}
                         <br> <div class="carousel1_cart"> <button class="addToCart">Add to Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card2.innerHTML = `<img src="${data[1].image}"></img>
                          <b>Name</b>:${data[1].name.substring(0,40)}...<br>
                            <b>Price</b>:₹${data[1].price}
                           <br>  <div class="carousel1_cart"><button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card3.innerHTML = `<img src="${data[2].image}"></img>
                             <b>Name</b>:${data[2].name.substring(0,40)}...<br>
                            <b>Price</b>:₹${data[2].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card4.innerHTML = `<img src="${data[3].image}"></img>
                            <b>Name</b>:${data[3].name.substring(0,40)}...<br>
                           <b>Price</b>:₹${data[3].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;


                 ////Add to cart(cart_data) functionality 1
                 
                let addCart = document.querySelectorAll("#carousel1 button")
                addCart.forEach((el,index)=>{
                    el.addEventListener('click',()=>{
                      let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
                    if(index==0){                        
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==1){                        
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==2){                       
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
                    }else if(index==3){                        
                        cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                    }
                    })       
                    
                })

                //// Add to favourite(fav_data) functionality 1
              let addFavData = document.querySelectorAll(".carousel1_cart>img")
                addFavData.forEach((el,index)=>{
                  el.addEventListener('click',()=>{
                    let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                if(index==0){                        
                    fav_data.push(data[index])
        localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==1){                        
                  fav_data.push(data[index])
        localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==2){                       
                  fav_data.push(data[index])
        localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==3){                        
                  fav_data.push(data[index])
        localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                }
                })       
                })

  setInterval(function (){
  
    if(i==20){
      i=0;
    }
  
      card1.innerHTML = `<img src='${data[i].image}'></img>
                           <b>Name</b>:${data[i].name.substring(0,40)}...<br>
                            <b>Price</b>:₹${data[i].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card2.innerHTML = `<img src="${data[i+1].image}"></img>
                           <b>Name</b>:${data[i+1].name.substring(0,40)}...<br>
                             <b>Price</b>:₹${data[i+1].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card3.innerHTML = `<img src="${data[i+2].image}"></img>
                           <b>Name</b>:${data[i+2].name.substring(0,40)}...<br>
                            <b>Price</b>:₹${data[i+2].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;
      card4.innerHTML = `<img src="${data[i+3].image}"></img>
                            <b>Name</b>:${data[i+3].name.substring(0,40)}...<br>
                            <b>Price</b>:₹${data[i+3].price}
                           <br> <div class="carousel1_cart"> <button>Add to Cart</button>
                           <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div>`;

             ////add to cart functionality 2
      
    let addCart = document.querySelectorAll("#carousel1 button")
     
    addCart.forEach((el,index)=>{
       
      el.addEventListener('click',()=>{
           // event.preventDefault()
           let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
         if(index==0){         
          
           cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))             
         }else if(index==1){
            
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))  
         }else if(index==2){
            
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))   
         }else if(index==3){
            
            cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))   
         }
      }) 
     })
                ///// Add data to fav_cart functionality 2
                let addFavData = document.querySelectorAll(".carousel1_cart>img")
                addFavData.forEach((el,index)=>{
                  el.addEventListener('click',()=>{
                   // event.preventDefault()
                   let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                if(index==0){                       
                    fav_data.push(data[index+i-1])
                    localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==1){                        
                  fav_data.push(data[index+i-1])
                  localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==2){                       
                  fav_data.push(data[index+i-1])
                  localStorage.setItem("favCart",JSON.stringify(fav_data))  
                }else if(index==3){                        
                  fav_data.push(data[index+i-1])
                  localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                }
                })       
                })

     i++;

    },7000)
  
}


/// If in ADDTOCART id same than gave alert



//<-----------FILTERED DATA APPENDING ON MAIN PAGE------------->

let filter_div = document.getElementById("filteredData")
function filterData(data){ 

  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[]
  let makeup = document.getElementById("makeup1");
 
    
  //<--------Data on main page shown---------->
  let filteredData =  data.filter(el => el.category=="Make-up");     


 filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                        <p>Name:${filteredData[0].name}</p>
                         <p>Price:${filteredData[0].price}</p>
                          <div class="mainCart"><button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                         <div><img src="${filteredData[1].image}">
                        <p>Name:${filteredData[1].name}</p>
                         <p>Price:${filteredData[1].price}</p>
                         <div class="mainCart"><button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                         <div><img src="${filteredData[2].image}">
                        <p>Name:${filteredData[2].name}</p>
                         <p>Price:${filteredData[2].price}</p>
                         <div class="mainCart"><button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                         <div><img src="${filteredData[3].image}">
                        <p>Name:${filteredData[3].name}</p>
                         <p>Price:${filteredData[3].price}</p>
                         <div class="mainCart"><button>Add To Cart</button>
                         <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`
                    // data adding to localStorage(cart_data)
                    let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                    add_data_to_cart_data.forEach((el,i)=>{
                     el.addEventListener('click',()=>{ 
                      let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];                                  
                       cart_data.push(filteredData[i])
                  localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                     })
                    })
                    //data adding to localStorage(fav_cart)
                    let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                    add_data_to_fav_data.forEach((el,i)=>{
                     el.addEventListener('click',()=>{  
                                                    
                        fav_data.push(filteredData[i])
                    localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                     })
                    })
//<-------For makeup data while clicking------>
   makeup.addEventListener('click',()=>{    
      let filteredData =  data.filter(el => el.category=="Make-up");     
        filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`
           // data adding to localStorage(cart_data)
                               let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                 add_data_to_cart_data.forEach((el,i)=>{
                                  el.addEventListener('click',()=>{
                                    let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];
                                    cart_data.push(filteredData[i])
            localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                  })
                                 })
           //data adding to localStorage(fav_cart)
                                 let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                 add_data_to_fav_data.forEach((el,i)=>{
                                  el.addEventListener('click',()=>{
                                    let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                     fav_data.push(filteredData[i])
            localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                  })
                                 })
       })
//<--------For skin data while click---------->
       let skin = document.getElementById("skin1")
      skin.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Skin");
             filter_div.innerHTML = "";
          filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{ 
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];                                  
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{ 
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];                                   
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })
//<--------For hair data while click---------->      
      let hair = document.getElementById("hair1")
      hair.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Hair");
                filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"> <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })

//<--------For PersonalCare data while click---------->
    let PersonalCare = document.getElementById("personalCare1")
    PersonalCare.addEventListener('click',()=>{
      let filteredData=  data.filter(el => el.category=="Personal");
                  filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })

//<--------For mom&babyCare data while click---------->      
    let babyCare = document.getElementById("babyCare1")
    babyCare.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Mom Care");
                  filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>

                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"> <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })

//<--------For Ayurveda data while click---------->      
     let Ayurveda = document.getElementById("ayurveda1")
    Ayurveda.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="Ayurveda");
                  filter_div.innerHTML = "";
         filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"> <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"> <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[]; 
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })

//<--------For fregrance data while click---------->      
     let fregrance = document.getElementById("freg1")
      fregrance.addEventListener('click',()=>{
      let filteredData =  data.filter(el => el.category=="fragrance");
                    filter_div.innerHTML = "";
        filter_div.innerHTML = `<div><img src="${filteredData[0].image}">
                              <p>Name:${filteredData[0].name}</p>
                               <p>Price:${filteredData[0].price}</p>
                               <div class="mainCart"> <button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[1].image}">
                              <p>Name:${filteredData[1].name}</p>
                               <p>Price:${filteredData[1].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[2].image}">
                              <p>Name:${filteredData[2].name}</p>
                               <p>Price:${filteredData[2].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>
                               <div><img src="${filteredData[3].image}">
                              <p>Name:${filteredData[3].name}</p>
                               <p>Price:${filteredData[3].price}</p>
                               <div class="mainCart"><button>Add To Cart</button>
                               <img src="https://assets.ajio.com/static/img/wishlistIcon.svg"></img></div></div>`

                                // data adding to localStorage(cart_data)
                                let add_data_to_cart_data = document.querySelectorAll(".mainCart>button")
                                add_data_to_cart_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let cart_data = JSON.parse(localStorage.getItem("Cart"))||[];
                                   cart_data.push(filteredData[i])
           localStorage.setItem("Cart",JSON.stringify(cart_data)) 
                                 })
                                })
          //data adding to localStorage(fav_cart)
                                let add_data_to_fav_data = document.querySelectorAll(".mainCart>img")
                                add_data_to_fav_data.forEach((el,i)=>{
                                 el.addEventListener('click',()=>{
                                  let fav_data =  JSON.parse(localStorage.getItem("favCart"))||[];
                                    fav_data.push(filteredData[i])
           localStorage.setItem("favCart",JSON.stringify(fav_data)) 
                                 })
                                })
      })


}






  // <----------- footer file imported from navbar.js....--------->
  let footer_Part=document.getElementById("footer");
  footer_Part.innerHTML=footer();
  