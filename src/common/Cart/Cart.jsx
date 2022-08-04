import React from "react";
import { useLocation } from "react-router-dom";
import Order from "./Order";
import "./style.css";

const Cart = ({ CartItem}) => {
  const location = useLocation();

  console.log("cart location",location);
  const id = (location.state && location.state.id )? location.state.id:"0";
  console.log("cart--",id);
  // prodcut qty total
  return (
    <div>
      <div>
        <div>
          <div className="container">
            <hr/>
            {CartItem.length === 0 && (
              <h1>No Items are add in Cart</h1>
            )}
            {CartItem.map((item) => {
              return (
               <div> <Order item={item} isReturnFlag={true} process={id}/> <hr/></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
