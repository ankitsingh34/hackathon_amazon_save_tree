import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Order({ item, isReturnFlag ,process,pending}) {
  console.log("order process id",process);
  console.log("order pending id",pending);
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
            <Link to={{ pathname: "/timer" }} state={{ state: { item } , pending:item.id}}>
              {process==item.id&&(<div style={{color:"Green"}}>return package : success</div>)} 
              {pending==item.id&&(<div style={{color:"Red"}}>return package : pending</div>)} 
              {process!=item.id&&pending!=item.id&&(<div>return package</div>)}
            </Link>
          )}
          {item.isReturnPackage==false&&(<div style={{color:"Gray"}}> return package  </div>)}
        </div>
        <div className="row">
           <Link to="/">return/replace</Link>
        </div>
      </div>
    </div>
  );
}
