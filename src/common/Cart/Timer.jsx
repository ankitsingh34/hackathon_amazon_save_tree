import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import App from "../../App";
import Data from "../Data";
import Cart from "./Cart";
import Order from "./Order";

const Timer = () => {
  const { CartItem } = Data;
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:01");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const navigate = useNavigate();
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);



  const location = useLocation();

  console.log("timer",location);

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
      {timer != "00:00:00" && (
        <div className="container">
          <center>
            <br />
            <div>
              Request for Return for item {item.name} #orderId {item.id} has
              been placed successfully.
            </div>
            <br />
            <div>
              Yaay !!!! {item.rewardPoints} Reward points on the way for
              #orderId {item.id} <br/> <div style={{color:"Green",marginTop:"10px"}}>{timer}</div>
            </div>
            <br />
            <hr />
            <div>
              <Order item={item} isReturnFlag={true} process={location.process}  pending={location.state.pending}/>
            </div>
            <hr />
          </center>
        </div>
      )}
      {timer == "00:00:00" && (
        navigate('/', { state: { id: item.id} })
      )}
    </div>
  );
};

export default Timer;
