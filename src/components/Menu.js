import React, { useState } from "react";
import { menu } from "../Data";
import Modal from "./Modal";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [listModal, setListModal] = useState([]);
  const [listCheck, setListCheck] = useState([]);
  const [total, setTotal] = useState(5);
  const toggleIngredient = (index) => {
    const updatedlistCheck = [...listModal];
    updatedlistCheck[index].selected = !updatedlistCheck[index].selected;
    setListCheck(updatedlistCheck);
    
  };
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <button className="btn" onClick={() =>{setOpenModal(true); setListModal(item.ingredientes);}}>
                Montar Lanche
              </button>
              
            </div>
          ))}
          
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
              <h1 style={{fontSize: 25, marginBottom: 15}}> Escolha os Ingredientes</h1>
              <div>
                {listModal.map((ingrediente, index) => (
                  <div key={index}>
                  <p style={{fontSize: 17, marginBottom: 15}}>
                  <input
                    style={{margin: 10}}
                    type="checkbox"
                    checked={ingrediente.selected || false}
                    onChange={() => toggleIngredient(index)}
                  />
                  {ingrediente.nome} - ${ingrediente.price}</p>
                </div>
                ))}
              </div>
              <div style={{fontSize: 18, marginLeft: 10}}> Total ${listModal.reduce((total, produto) =>  produto.selected ? total + produto.price : total,0)}</div>
              </Modal>
          
      </section>
      
    </>
  );
};

export default Menu;
