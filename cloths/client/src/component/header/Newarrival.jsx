import React from "react";
import './Newarrival.css'
import { new22 } from "../../asserts/img/Images";
import { new33 } from "../../asserts/img/Images";
import { new55 } from "../../asserts/img/Images";
import { new77 } from "../../asserts/img/Images";
import { new78 } from "../../asserts/img/Images";
import { news10 } from "../../asserts/img/Images";
import { news11 } from "../../asserts/img/Images";
import { news12 } from "../../asserts/img/Images";
import { news15 } from "../../asserts/img/Images";
// import { news18 } from "../../asserts/img/Images";
import { news16 } from "../../asserts/img/Images";
import { useNavigate } from "react-router-dom";




const Newarrival = () =>{
  const navigate=useNavigate();
     return (
       <div className="new-main">
         <div className="new-sub-main">
           <div className="tracking-in-contract-bck ">
             <h2>New Arrival</h2>
           </div>
         </div>
         <div className="product-container">
           <div className="product" data-name="p-1">
             <img src={news16} alt="dfg" />
             <h3>Brown-Jackets For Girls</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-2">
             <img src={new22} alt="fgd" />
             <h3>White-V-Neck Shirt</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-3">
             <img src={new33} alt="sdfg" />
             <h3>Narrow-Brown-Shirts</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-4">
             <img src={new55} alt="vsvf" />
             <h3>Pink-Track-Pants</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-5">
             <img src={new77} alt="sdf" />
             <h3>Black-Baggy-Jeans</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={new78} alt="sdfsd" />
             <h3>Oversize-T-Shirts</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news12} alt="dfgd" />
             <h3>Denim-Baggy</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news10} alt="sdfg" />
             <h3>Sweater</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news11} alt="sdg" />
             <h3>Denim-Jeans</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news12} alt="dfgds" />
             <h3>Casual-Shirts For Men</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news15} alt="dfg" />
             <h3>Cargo Pant</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
           <div className="product" data-name="p-6">
             <img src={news16} alt="df" />
             <h3>Oversize-BabyPink T shirts</h3>
             <div className="price">Rs. 550</div>
             <div className="cart">
               <button>Add To Cart</button>
             </div>
           </div>
         </div>
       </div>
     );
}

export default Newarrival