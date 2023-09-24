import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1,
    name: "Hamburguer",
    pracoBase: 5,
    ingredientes: [
      { nome: "Carne de hambúrguer", price: 3, selected: false },
      { nome: "Queijo", price: 3, selected: false },
      { nome: "Alface", price: 3, selected: false },
      { nome: "Tomate", price: 3, selected: false },
      { nome: "Pão", price: 3, selected: false },
      { nome: "Cebola", price: 3, selected: false },
      { nome: "Maionese", price: 3, selected: false },
      { nome: "Ketchup", price: 3, selected: false },
      { nome: "Mostarda", price: 3, selected: false },
      { nome: "Bacon", price: 3, selected: false },
    ],
  },
  {
    img: menuImage2,
    name: "Smoothie",
    pracoBase: 5,
    ingredientes: [
      { nome: "Frutas diversas", price: 3, selected: false },
      { nome: "Iogurte", price: 3, selected: false },
      { nome: "Mel", price: 3, selected: false },
      { nome: "Espinafre", price: 3, selected: false },
      { nome: "Sementes de chia", price: 3, selected: false },
      { nome: "Banana", price: 3, selected: false },
      { nome: "Morango", price: 3, selected: false },
      { nome: "Abacaxi", price: 3, selected: false },
      { nome: "Laranja", price: 3, selected: false },
      { nome: "Melancia", price: 3, selected: false },
    ],
  },
  {
    img: menuImage3,
    name: "Pastel",
    pracoBase: 5,
    ingredientes: [
      { nome: "Massa de pastel", price: 3, selected: false },
      { nome: "Queijo", price: 3, selected: false },
      { nome: "Presunto", price: 3, selected: false },
      { nome: "Tomate", price: 3, selected: false },
      { nome: "Orégano", price: 3, selected: false },
      { nome: "Azeite", price: 3, selected: false },
      { nome: "Molho de pimenta", price: 3, selected: false },
      { nome: "Ovo", price: 3, selected: false },
      { nome: "Cebola", price: 3, selected: false },
      { nome: "Pimentão", price: 3, selected: false },
    ],
  },
  {
    img: menuImage4,
    name: "Pizza",
    pracoBase: 5,
    ingredientes: [
      { nome: "Massa de pizza", price: 3, selected: false },
      { nome: "Molho de tomate", price: 3, selected: false },
      { nome: "Queijo", price: 3, selected: false },
      { nome: "Pepperoni", price: 3, selected: false },
      { nome: "Pimentão", price: 3, selected: false },
      { nome: "Cebola", price: 3, selected: false },
      { nome: "Azeitonas", price: 3, selected: false },
      { nome: "Cogumelos", price: 3, selected: false },
      { nome: "Manjericão", price: 3, selected: false },
      { nome: "Alho", price: 3, selected: false },
    ],
  },
  {
    img: menuImage5,
    name: "Cachorro Quente",
    pracoBase: 5,
    ingredientes: [
      { nome: "Salsicha", price: 3, selected: false },
      { nome: "Pão de cachorro quente", price: 3, selected: false },
      { nome: "Mostarda", price: 3, selected: false },
      { nome: "Ketchup", price: 3, selected: false },
      { nome: "Cebola", price: 3, selected: false },
      { nome: "Pepino em conserva", price: 3, selected: false },
      { nome: "Repolho roxo", price: 3, selected: false },
      { nome: "Cheddar derretido", price: 3, selected: false },
      { nome: "Chili", price: 3, selected: false },
      { nome: "Batata palha", price: 3, selected: false },
    ],
  },
];

// Continue adicionando outros itens de menu com a mesma estrutura.


const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: menuImage2,
    name: "Smoothie Personalizado 1",
    ingredientes: [
      "Banana",
      "Morango",
      "Laranja",
    ],
  },
  {
    img: menuImage2,
    name: "Smoothie Personalizado 2",
    ingredientes: [
      "Iogurte",
      "Mel",
      "Abacaxi",
      "Laranja",
    ],
  },
  {
    img: menuImage3,
    name: "Pastel Personalizado 1",
    ingredientes: [
      "Massa de pastel",
      "Queijo",
      "Ovo",
      "Cebola",
    ],
  },
  {
    img: menuImage3,
    name: "Pastel Personalizado 2",
    ingredientes: [
      "Massa de pastel",
      "Queijo",
    ],
  },
  {
    img: menuImage4,
    name: "Pizza Personalizado 1",
    ingredientes: [
      "Massa de pizza",
      "Molho de tomate",
      "Queijo",
      "Pepperoni",
      "Alho",
    ],
  },
  {
    img: menuImage5,
    name: "Cachorro Quente Personalizado 1",
    ingredientes: [
      "Salsicha",
      "Pão de cachorro quente",
      "Cebola",
      "Pepino em conserva",
      "Batata palha",
    ],
  },
];
const review = [
  {
    img: reviewImage1,
  },
  {
    img: reviewImage2,
  },
  {
    img: reviewImage3,
  },
];
const blog = [
  {
    img: blogImage1,
  },
  {
    img: blogImage2,
  },
  {
    img: blogImage3,
  },
];
export { menu, cart, product, review, blog };
