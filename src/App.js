import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <Products />
      <Footer />
    </>
  );
};

export default App;
