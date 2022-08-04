import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Order({ item, isReturnFlag }) {
  return (
    <div className="row" key={item.id}>
      <div className="col">
        <img
          src={item.cover}
          style={{ height: "200px", width: "200px" }}
          alt=""
        />
      </div>
      <div className="col-6">
        <div>
          <p>{item.details}</p>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <p>${item.price}</p>
        </div>
        <div className="row">
          {isReturnFlag == true && item.isReturnPackage == true &&(
            <Link to={{ pathname: "/return" }} state={{ state: { item } }}>
              {" "}
              return package
            </Link>
          )}
        </div>
        <div className="row">
           <Link to="/">return/replace</Link>
        </div>
      </div>
    </div>
  );
}
