import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Order({ item,isReturnFlag}) {
  return (
    <div className="row" key={item.id}>
      <div className="col">
        <img
          src={item.cover}
          style={{ height: "200px", width: "200px" }}
          alt=""
        />
      </div>
      <div className="col-8">
        <div>
          <p>{item.details}</p>
        </div>
      </div>
      <div className="col">
        <p>${item.price}</p>
        {isReturnFlag == true && (
          <Link to={{ pathname: "/return" }} state={{ state: { item } }}>
            {" "}
            return package
          </Link>
        )}
      </div>
    </div>
  );
}
