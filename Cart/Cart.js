import { footer,navbar,headerInside } from "../components/navbar.js";



let cartItem = JSON.parse(localStorage.getItem("Cart"));

  let totalPrice=0;
for(let el of cartItem){
    totalPrice += Number(el.price)
}
let order = document.getElementById("right_block")
  order.innerHTML = `  <h2>SUMMARY</h2>
  <form action="">
      <input type="text" class="tax" id="" placeholder="ESTIMATE SHIPPING AND TAX">
      <div class="input">
          <label for="" class="label">Country :</label>
          <select name="country" class="select" >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Africa">Africa</option>
              <option value="China">China</option>
          </select>
      </div>
       <div id="state" class="input">
          <label for=" " class="label">State :</label>
          <select name="State" class="select" id="">
          <option value="AN">Andaman and Nikobar Islands</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="ARP">Arunachal Pradesh</option>
          <option value="Aa">Assam</option>
          <option value="Br">Bihar</option>
          <option value="Ch">Chandigarh</option>
          <option value="Chh">Chhattisgarh</option>
          <option value="Br">Bihar</option>
          <option value="Dl">Delhi</option>
          <option value="DN">Daman & Diu</option>
          <option value="Goa">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Hryana</option>
          <option value="HP">Himachal Pradesh</option>
      </select>
       </div>  
       <h4>Total Price = <b>₹${totalPrice}</b></h4> 
       <input type="submit" class="btn" value="PROCEED TO CHECKOUT">
  </form>
  
  `

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

  let header_part = document.getElementById("header");
  header_part.innerHTML = headerInside();

  let navbar_part = document.getElementById("navbar");
  navbar_part.innerHTML = navbar();

