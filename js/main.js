import {
  displayCartItems,
  displayCheckoutItems,
  updateCartTotal,
} from "./cart.js";
import { listProducts, setupAddToCartButtons } from "./product.js";
import { loadTheme, toggleThemeButton } from "./theme-toggle.js";

loadTheme();
toggleThemeButton();

const products = document.getElementById("products");

if (products) {
  listProducts();
  setupAddToCartButtons();
}

displayCartItems();
displayCheckoutItems();
updateCartTotal();
