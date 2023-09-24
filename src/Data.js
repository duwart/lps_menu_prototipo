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
    ingredientes: [
      "Carne de hambúrguer",
      "Queijo",
      "Alface",
      "Tomate",
      "Pão",
      "Cebola",
      "Maionese",
      "Ketchup",
      "Mostarda",
      "Bacon",
    ],
  },
  {
    img: menuImage2,
    name: "Smoothie",
    ingredientes: [
      "Frutas diversas",
      "Iogurte",
      "Mel",
      "Espinafre",
      "Sementes de chia",
      "Banana",
      "Morango",
      "Abacaxi",
      "Laranja",
      "Melancia",
    ],
  },
  {
    img: menuImage3,
    name: "Pastel",
    ingredientes: [
      "Massa de pastel",
      "Queijo",
      "Presunto",
      "Tomate",
      "Orégano",
      "Azeite",
      "Molho de pimenta",
      "Ovo",
      "Cebola",
      "Pimentão",
    ],
  },
  {
    img: menuImage4,
    name: "Pizza",
    ingredientes: [
      "Massa de pizza",
      "Molho de tomate",
      "Queijo",
      "Pepperoni",
      "Pimentão",
      "Cebola",
      "Azeitonas",
      "Cogumelos",
      "Manjericão",
      "Alho",
    ],
  },
  {
    img: menuImage5,
    name: "Cachorro Quente",
    ingredientes: [
      "Salsicha",
      "Pão de cachorro quente",
      "Mostarda",
      "Ketchup",
      "Cebola",
      "Pepino em conserva",
      "Repolho roxo",
      "Cheddar derretido",
      "Chili",
      "Batata palha",
    ],
  },
];

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
    img: productImage1,
  },
  {
    img: productImage2,
  },
  {
    img: productImage3,
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
