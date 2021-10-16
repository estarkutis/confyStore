// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  // console.log(id);
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    // console.log(product); galime pamatyti producta kuris bus naudojamas krepselyje.
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM
    addToCart(product);
    console.log(cart);
  } else {
    // update values
  }
  // more stuf coming up

  openCart();
};

const init = () => {
  console.log(cart);
};
init();
