import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Cart from "./common/Cart/Cart";
import Data from "./common/Data";
import Return from "./common/Return/Return";

export default function App() {
  const { CartItem} = Data ;  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart CartItem={CartItem}  />} />
        <Route path="/return"  element={<Return />} />
      </Routes>
    </BrowserRouter>
  );
}
