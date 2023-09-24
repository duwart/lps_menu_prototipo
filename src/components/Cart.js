import React, { useState } from 'react';

const Cart = () => {
  // Estado do carrinho
  const [cart, setCart] = useState([{ id: 1, name: 'Produto 1', price: 10 },
  { id: 2, name: 'Produto 2', price: 15 },
  { id: 3, name: 'Produto 3', price: 20 },]);
  const [total, setTotal] = useState(0);

  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  // Função para calcular o total do carrinho
  const calculateTotal = (cartItems) => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
