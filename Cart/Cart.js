import { footer,navbar,headerInside,header } from "../components/navbar.js";



let cartItem = JSON.parse(localStorage.getItem("Cart"));

  let totalPrice=0;
for(let el of cartItem){
    totalPrice += Number(el.price)
}
let order = document.getElementById("right_block")
  order.innerHTML = `  <h2>SUMMARY</h2>
  <form action="">
     
      <div class="input">
          <label for="" class="label">Country :</label>
          <select name="country" class="select" >
              <option value="India">India</option>
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
          <option value="DD">Dadra and Nagar Haveli</option>
          <option value="DN">Daman & Diu</option>
          <option value="Dl">Delhi</option>         
          <option value="Goa">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KR">Kerala</option>
          <option value="LK">Lakshadweep</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="MNI">Manipur</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="MG">Meghalya</option>
          <option value="MZ">Mizoram</option>
          <option value="NG">Nagland</option>
          <option value="Od">Odisha</option>
          <option value="PD">Puducherry</option>
          <option value="PJ">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TS">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UTT">Uttarakhand</option>
          <option value="WB">West Bengal</option>

      </select>
       </div> 
       <div id="pincode">
       <label for="pincode">Postal Code :</label>
       <input type="Test" name="" id="">
       </div>
    <div id="price">
     <span id="pr">Total Price :
      <b>₹${totalPrice}</b></span>
     </div>
        
       <input type="submit" class="btn" value="PROCEED TO CHECKOUT">
  </form>
  
  `

  display(cartItem)

 function display(cartItem){
    document.querySelector("#middle_block").innerText="";
   
    cartItem.forEach((items,i)=>{
    
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
            cartItem.splice(i,1)           
            localStorage.setItem("Cart",JSON.stringify(cartItem));           
            display(cartItem);  

       

          //// Total price functionality
     totalPrice = totalPrice - Number(items.price);  
        
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
      
        })
    ////Remove functionality end

    div1.append(image,name,price,rmv_btn)
    document.querySelector("#middle_block").append(div1);
    })

}





  let footer_Part = document.getElementById("footer")
  
  footer_Part.innerHTML = footer()

  let header_part = document.getElementById("header");
  header_part.innerHTML = headerInside();

  let navbar_part = document.getElementById("navbar");
  navbar_part.innerHTML = navbar();

