import { footer,navbar,headerInside } from "../components/navbar.js";


//window.location.reload()
let favData = JSON.parse(localStorage.getItem("favCart"));


 console.log(favData)
  display(favData)


 function display(favData){
    document.querySelector("#middle_block").innerText="";
   
    favData.forEach((items,i)=>{
    
        let div1 = document.createElement("div")

        let image = document.createElement("img");
        image.src = items.image;
    
        let name = document.createElement("p");
        name.innerHTML = `Name:${items.name.substring(0,30)}...`;

        let price = document.createElement("p");
        price.innerHTML = `Price:₹${items.price}`;
    ////Remove funcionality start
        let rmv_btn = document.createElement("button");
        rmv_btn.innerText = "Remove Item";
        rmv_btn.addEventListener('click',()=>{   
          favData.splice(i,1)           
          localStorage.setItem("favCart",JSON.stringify(favData));     
           display(favData);
          //// Total price functionality
    
        })
    ////Remove functionality end

    div1.append(image,name,price,rmv_btn)
    document.querySelector("#middle_block").append(div1);
    })

}


let header_part = document.getElementById("header");
header_part.innerHTML = headerInside();

let navbar_part = document.getElementById("navbar");
navbar_part.innerHTML = navbar();



  let footer_Part = document.getElementById("footer");
  footer_Part.innerHTML = footer();

  let header_part =document.getElementById("header");
  header_part.innerHTML = headerInside();

  let navbar_part = document.getElementById("navbar");
  navbar_part.innerHTML=navbar();