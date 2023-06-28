import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import ErrorPage from "./components/ErrorPage";
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
