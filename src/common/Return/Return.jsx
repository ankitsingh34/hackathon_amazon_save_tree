import React from "react";
import { useLocation } from "react-router-dom";
import Order from "../Cart/Order";
export default function Return() {
  const location = useLocation();

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
    <div>
      <center>
        <br />
        <div>
          <h2>Welcome to Amazon Return Packaging </h2>
        </div>
        <br />
        <div>
          Request for Return for item {item.name} #orderId {item.id} has been
          place successfully.
        </div>
        <br />
        <div>
          Yaay! {item.rewardPoints} Reward points on the way for #orderId{" "}
          {item.id}
        </div>
        <br />
        <br />
        <hr />
        <div className="container">
          <Order item={item} isReturnFlag={false}/>
        </div>
        <hr />
      </center>
    </div>
  );
}
