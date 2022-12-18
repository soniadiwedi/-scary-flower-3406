import { footer } from "../components/navbar.js";



let fav_data = JSON.parse(localStorage.getItem("favCart"));

  let totalPrice=0;
for(let el of cartItem){
    totalPrice += Number(el.price)
}
let order = document.getElementById("right_block")
  order.innerHTML = `<h2>Total Price = <b>₹${totalPrice}</b></h2>`

  display(fav_data)

 function display(fav_data){
    document.querySelector("#middle_block").innerText="";
   
    fav_data.forEach((items,i)=>{
    
        let div1 = document.createElement("div")

        let image = document.createElement("img");
        image.src = items.image;
    
        let name = document.createElement("p");
        name.innerHTML = `Name:${items.name}`;

        let price = document.createElement("p");
        price.innerHTML = `Price:₹${items.price}`;
    ////Remove funcionality start
        let add_cart = document.createElement("button");
        add_cart.innerText = "Remove Item";
        add_cart.addEventListener('click',()=>{      
           addCart(items);
          //// Total price functionality
     totalPrice = totalPrice - Number(items.price);  
        
        order.innerHTML = `<h2>Total Price = <b>₹${totalPrice}</b></h2>`
        })
    ////Remove functionality end

    div1.append(image,name,price,add_cart)
    document.querySelector("#middle_block").append(div1);
    })

}

function addCart(items){
  cartItem.push(items)
  localStorage.setItem("Cart",JSON.stringify(cartItem));
}




  let footer_Part = document.getElementById("footer")
  
  footer_Part.innerHTML = footer()