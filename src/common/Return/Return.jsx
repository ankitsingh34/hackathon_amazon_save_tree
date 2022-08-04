import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Order from "../Cart/Order";
export default function Return() {
  const location = useLocation();
  const [time, setTime] = useState(Date.now());
  console.log(location);
  if (location.state == null)
    return (
      <div>
        <center>
          <h1> 404 Page not available </h1>
        </center>
      </div>
    );
  const { item } = location.state.state;
 
  
  return (
    <div className="container">
      <center>
        <br />
        <div>
          Request for Return for item {item.name} #orderId {item.id} has been
          placed successfully.
        </div>
        <br />
        <div>
          Yaay !!!! {item.rewardPoints} Reward points on the way for #orderId{" "}
          {item.id}
        </div>
        <br />
        <hr />
        <div>
          <Order item={item} isReturnFlag={false} />
        </div>
        <hr />
      </center>
    </div>
  );
}
