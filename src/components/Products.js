import React from "react";
import { product } from "../Data";
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          Pedir Novamente
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />

              </div>
              <div className="content">
                <h3>{item.name}</h3>
                {item.ingredientes.map((ingrediente, index) => (
                  <div key={index}>
                  <p style={{fontSize: 17, marginTop: 20, color:'#fff'}}>
                  {ingrediente}</p>
                </div>
                ))}
                <button className="btn" onClick={() =>{}}>
                Adicionar ao Carrinho
              </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
