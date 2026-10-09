import {
  displayCartItems,
  displayCheckoutItems,
  updateCartTotal,
} from "./cart.js";
import { setupCheckout } from "./checkout.js";
import {
  listProducts,
  populateCategoryFilter,
  setupAddToCartButtons,
} from "./product.js";
import { loadTheme, toggleThemeButton } from "./theme-toggle.js";

loadTheme();
toggleThemeButton();

const products = document.getElementById("products");

if (products) {
  populateCategoryFilter();
  listProducts();
  setupAddToCartButtons();
}

displayCartItems();
displayCheckoutItems();
updateCartTotal();

if (checkoutForm) {
  setupCheckout();
}
