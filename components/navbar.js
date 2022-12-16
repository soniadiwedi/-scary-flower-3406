function footer(){
  return ` 
  <div id="footer-top">
      <div>
          <h4>CONTACT INFO</h4>
      <ul>
          <li>(+91) 7877061041</li>
          <li>sales@glam-goddess.com</li>
          <li>Open time: 10:00AM - 7:00PM</li>

      </ul>
  </div>
      <div>
          <h4>QUICK LINKS</h4>
          <ul>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return and Refund Policy</li>
              <li>Shipping Policy</li>

          </ul>
      </div>
      <div>
          <h4>CUSTOMER INFO</h4>
          <ul>
              <li>My Account</li>
              <li>Track your Order</li>
              <li>Order Returns</li>
              <li>Wishlist</li>
              <li>News & Events</li>
              <li>FAQ</li>

          </ul>
      </div>
      <div>
          <h4>CATEGORIES</h4>
          <ul> 
              <li>Makeup</li>
              <li>Skin</li>
              <li>Hair</li>
              <li>Personal Care</li>
              <li>Mom & Baby Care</li>
              <li>Fragrance</li>
              <li>Ayurveda</li>
          </ul>
      </div>
  </div>
  <hr>
  <div id="footer-bot">
    <div>
      <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png">
    </div>
    
      <div id="h4">
          <h4>Signup For Newsletter</h4>
      </div>
      <div id="input">
      <input type="text" placeholder="Signup For Newsletter" id="subscribe">
      <button id="subs-btn">subscribe</button>
    </div>
  </div>
`
}



function header(){
    return `
    <img src ="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg">
        <div>
           <img src="./picture/Glam Goddess.png">
           <div id="search">
              <select>
                <option value="">All Categories</option>
                <option value="">--Makeup</option>
                <option value="">---Face</option>
                <option value="">----Fondation</option>
                <option value="">----Blush</option>
                <option value="">----Face Primer</option>
                <option value="">----Contour</option>
                <option value="">----BB Cream</option>
                <option value="">----Makeup Kit</option>
                <option value="">----CC Cream</option>
                <option value="">--Eye</option>
                <option value="">-----Eye Shadow</option>
                <option value="">----False Eyelashes</option>
                <option value="">----Mascara</option>
                <option value="">----Kajal</option>
                <option value="">-----Eye Primer</option>
                <option value="">----Eye-Palettes</option>
                <option value="">----Eye Kit</option>
                <option value="">--Lip</option>
                <option value="">----Lipstick</option>
              </select>
              <span>|</span>
              <input placeholder="Enter your search....">
              <button type="submit" title="search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="landr">
          <button><i class="fa-solid fa-heart"></i></button>
          <button><i class="fa-solid fa-user"></i></button>
          <span>My Account</span>
        </div>
        </div>
    `;
}


function navbar(){
    return`
    <div class="nav">
    <ul>
        <li><a href="#">MAKEUP</a> 
          <div id="sub-m">
             <div class="sub-makeup">
            <!-- face  -->
             <div>
              <h3>Face</h3>
              <ul>
                <li>BB Cream</li>
                <li>Blush</li>
                <li>Bronzer</li>
                <li>CC Cream</li>
                <li>Contour</li>
                <li>Concealer</li>
                <li>Compact & Powder</li>
                <li>Face Primer</li>
                <li>Foundation</li>
                <li>Highlighter</li>
                <li>Loose Powder</li>
                <li>Makeup Kits</li>
                <li>Makeup Remover</li>
                <li>Setting spray</li>
              </ul>
             </div>
             <!-- eyes  -->
             <div>
               <h3>Eye</h3>
               <ul>
                <li>Contact Lens</li>
                <li>Eye Kit</li>
                <li>Eyeliner</li>
                <li>Eye Shadow</li>
                <li>Eye primer</li>
                <li>Eye palette</li>
                <li>Eye makeup</li>
                <li>Eye Brow Enhancer</li>
                <li>False Eyebrow</li>
                <li>Kajal</li>
                <li>Mascara</li>
                <li>Under Eye Concealer</li>
               </ul>
             </div>
             <!-- lips  -->
             <div>
               <h3>Lips</h3>
               <ul>
                <li>Lipstick</li>
                <li>Liquid Lipstick</li>
                <li>Lip Liner</li>
                <li>Lip Glose</li>
                <li>Lip Balm</li>
                <li>Lip Crayon</li>
                <li>Lip Stain</li>
                <li>Lip Plumper</li>
               </ul>
             </div>
             <!-- nails  -->
             <div>
               <h3>Nails</h3>
               <ul>
                <li>Manicure & Pedicure Kit</li>
                <li>Nail Polish</li>
                <li>Nail Care</li>
                <li>Nail Art Kit</li>
                <li>Nail Polish Set</li>
                <li>Nail Polish </li>
               </ul>
             </div>
             <!-- tool brushes -->
             <div>
              <h3>Tool Brushes</h3>
               <ul>
                <li>Blush Brush</li>
                <li>Eyelash Curler</liEyelash>
                <li>Eye Brush</li>
                <li>Face Brush</li>
                <li>Lip Brush</li>
                <li>Makeup Pouches</li>
                <li>Mirror</li>
                <li>Songees & Applicators</li>
                <li>Sharpener</li>
                <li>Tweezers</li>
               </ul>
             </div>
           </div>
          </div>
          </li>
         
           
        <li><a href="#">SKIN </a>
        <div id="sub-skin">
           
              <div class="sub-skin">
                <div>
                  <h3>Eye Care</h3>
                  <ul>
                    <li>Drak circles</li>
                    <li>Eye Contour Care</li>
                    <li>Eye Cream</li>
                    <li>Eye Mask </li>
                    <li>Eye Serums</li>
                    <li>Puffiness</li>
                    <li>Under Eye cream</li>
                    <li>Under Eye Wrinkles</li>
                  </ul>
                </div>
                <div>
                  <h3>Face Care</h3>
                  <ul>
                    <li>Anti-Aging Creams</li>
                    <li>Bleach Creams</li>
                    <li>Brightening</li>
                    <li>Face Wash</li>
                    <li>Facial Wash</li>
                    <li>Face Oil</li>
                    <li>Face Cleaner</li>
                    <li>Facial Kits</li>
                    <li>Face Tools</li>
                    <li>Moisturizer</li>
                    <li>Mask & Peel</li>
                    <li>Serum</li>
                    <li>Toner & Astringents</li>
                    <li>Cleansing Creams</li>
                  </ul>
                </div>
                <div>
                  <h3>Body Care</h3>
                  <ul>
                    <li>All Cream</li>
                    <li>Body Moisturizers</li>
                    <li>Body Toner</li>
                    <li>Body Sun Care</li>
                    <li>Brightening Lotion</li>
                    <li>Dark circles & Wrinkles</li>
                    <li>Day Cream</li>
                    <li>Foot Cream</li>
                    <li>Hair Remover Cream</li>
                    <li>Hannd cream</li>
                    <li>Hands  & feet</li>
                    <li>Kits  & Combos</li>
                    <li>Night Cream</li>
                    <li>Neck Cream</li>
                  </ul>
                </div>
            <div>
              <img src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg" alt="cream">
            </div>
           </div>
        </div>
        </li>
      
      <li><a href="#">HAIR</a>
      <div id="sub-hair">
         <div class="sub-hair">
                <div>
                  <h3>Hair Care</h3>
                  <ul>
                    <li>Color Protection</li>
                    <li>Dandruff</li>
                    <li>Dry Shampoo</li>
                    <li>Gels & Waxes</li>
                    <li>Hair Spray</li>
                    <li>Hair Color/Dye</li>
                    <li>Hair Cream & Mask</li>
                    <li>Hair Styling </li>
                    <li>Hairfall & Thinning</li>
                    <li>Straightener</li>
                  </ul>
                </div>
                <div>
                  <h3>Hair Loss</h3>
                  <ul>
                    <li>Conditioner</li>
                    <li>Hair Oil</li>
                    <li>Hair Serum</li>
                    <li>Hair Growth Solutions</li>
                    <li>Shampoo</li>
                  </ul>
                </div>
                <div>
                  <img src="	https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg" alt="">
                </div>
            </div>
            </li>

        <li><a href="#">PERSONAL</a>
         <div id="sub-personal">
           <div class="sub-personal">
              <div>
                <h3>Bath & Body</h3>
                <ul>
                  <li>Body Cleaner</li>
                  <li>Body Massage Oil</li>
                  <li>Body Wash</li>
                  <li>Creams</li>
                  <li>Essential oils</li>
                  <li>Foot Cream</li>
                  <li>Scrubs & Exfoliants</li>
                  <li>Ubtan & Face Packs</li>
                </ul>
              </div>
              <div>
                <h3>Bathing Accessories</h3>
                <ul>
                  <li>Bath Brushes</li>
                  <li>Loofahs</li>
                  <li>Shower Caps</li>
                  <li>Sponges</li>
                </ul>
              </div>
              <div>
                <h3>Bath & Shower</h3>
                <ul>
                  <li>Body Soaps</li>
                  <li>Shower Gel</li>
                </ul>
              </div>
              <div>
                <img src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg
" alt="">
              </div>
           </div>
      </div>
      </li>
            
        <li><a href="#">MOM & BABY CARE</a>
           <div id="sub-mom">
                 <div class="sub-mom">
             <div>
              <h3>Baby Care</h3>
              <ul>
                <li>Bath Time</li>
                <li>Diapers</li>
                <li>Lotions & Creams</li>
                <li>Oil</li>
                <li>Powder</li>
                <li>Shampoo</li>
                <li>Soaps</li>
                <li>Sterlizer & Cleaners</li>
                <li>Rash cream</li>
                <li>Wipes</li>
              </ul>
             </div>
             <div>
              <h3>Mom Care</h3>
              <ul>
                <li>Lotions & creams</li>
                <li>Personal Care</li>
              </ul>
             </div>
             <div>
              <img src="	https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg
" alt="">
             </div>
           </div>
           </div>
           </li>
           
        <li><a href="#">FRAGRANCE</a>
          <div id="sub-fragrance">
               <div class="sub-fragrance">
              <ul>
                <li>Perfumes</li>
                <li>Deodorants</li>
                <li>Body Mist/Spray</li>
              </ul>
            </div>
          </div>
          </li>
            
        <li><a href="#">AYURVEDA</a>
           <div id="sub-ayurveda">
               <div class="sub-ayurveda">
              <div>
                <h3>Natural Skin Care</h3>
                <ul>
                  <li>Body Wash</li>
                  <li>Body Lotion</li>
                  <li>Cleaner</li>
                  <li>Cream</li>
                  <li>Eye Care</li>
                  <li>Face Wash</li>
                  <li>Gel</li>
                  <li>Lip Care</li>
                  <li>Mask</li>
                  <li>Pack</li>
                  <li>Scrub</li>
                  <li>Sun Protection</li>
                </ul>
              </div>
              <div>
                <h3>Natural Hair Care</h3>
                <ul>
                  <li>Conditioner</li>
                  <li>Hair Oil</li>
                  <li>Hair Serum</li>
                  <li>Hair Gel</li>
                  <li>Shampoo</li>
                </ul>
              </div>
              <div>
                <img src="	https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg" alt="">
              </div>
           </div>
           </div>
           </li>
           
        <li><a href="#">BRANDS</a>
        <div id="sub-brands">
            <div class="sub-brands">
              <h2>Top Brands</h2>
              <hr>
              <div>
                <div>LAKME</div>
                <div>LOREAL PARIS</div>
                <div>JOY</div>
                <div>AROMA MAGIC</div>
                <div>LOTUS HERBAL</div>
                <div>BIOTIQUE</div>
                <div>VLCC</div>
                <div>VEGA</div>
                <div>MAYBELLINE</div>
                <div>MAMAEARTH</div>
                <div>CHICCO</div>
                <div>NEUTROGENA</div>
              </div>
            </div>
        </div>
        </li>
            
    </ul>
    
    
  </div>
  
  <div class="cart">
    <img src="./picture/shopping-cart.png" alt="">
    <a href="">MY CART</a>
  </div>
    `
}
export {footer,header,navbar}






