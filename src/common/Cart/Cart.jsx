import React from "react";
import { Link } from "react-router-dom";
import Order from "./Order";
import "./style.css";

const Cart = ({ CartItem}) => {
  // prodcut qty total
  return (
    <div>
      <div>
        <div>
          <div className="container">
            {CartItem.length === 0 && (
              <h1>No Items are add in Cart</h1>
            )}
            {CartItem.map((item) => {
              return (
               <div> <Order item={item} isReturnFlag={true}/> <hr/></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;