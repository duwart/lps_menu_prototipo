import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
        </nav>
        
        <div className="icons">
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          >Cart</div>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <button className="btn">
            Comprar
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
