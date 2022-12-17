import { footer } from "../components/navbar.js";



let cartItem = JSON.parse(localStorage.getItem("Cart"));

  let totalPrice=0;
for(let el of cartItem){
    totalPrice += Number(el.price)
}
let order = document.getElementById("right_block")
  order.innerHTML = `<h2>Total Price = <b>₹${totalPrice}</b></h2>`

  display(cartItem)

 function display(cartItem){
    let cartAppend =document.querySelector("#middle_block")

    cartAppend.innerHTML = "";
    cartItem.forEach((items,i)=>{
    
        let div1 = document.createElement("div")

        let image = document.createElement("img");
        image.src = items.image;
    
        let name = document.createElement("p");
        name.innerHTML = `Name:${items.name}`;

        let price = document.createElement("p");
        price.innerHTML = `Price:₹${items.price}`;
    ////Remove funcionality start
        let rmv_btn = document.createElement("button");
        rmv_btn.innerText = "Remove Item";
        rmv_btn.addEventListener('click',()=>{
            cartItem.splice(i,1)           
            localStorage.setItem("Cart",JSON.stringify(cartItem));           
            display(cartItem);  
          //// Total price functionality
     totalPrice = totalPrice - Number(items.price);  
        
        order.innerHTML = `<h2>Total Price = <b>₹${totalPrice}</b></h2>`
        })
    ////Remove functionality end

    div1.append(image,name,price,rmv_btn)
    cartAppend.append(div1);


     


    })

}





  let footer_Part = document.getElementById("footer")
  
  footer_Part.innerHTML = footer()

