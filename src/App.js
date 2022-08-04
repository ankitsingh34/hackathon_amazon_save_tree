import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Cart from "./common/Cart/Cart";
import Timer from "./common/Cart/Timer";
import Data from "./common/Data";
import Footer from "./common/header&Footer/Footer";
import Header from "./common/header&Footer/Header";
import Return from "./common/Return/Return";

export default function App() {
  const { CartItem} = Data ;  


  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route path="/" element={<Cart CartItem={CartItem}   />} />
        <Route path="/return"  element={<Return /> } />
        <Route path="/timer"  element={<Timer /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
