import {
  displayCartItems,
  displayCheckoutItems,
  isCheckoutButtonDisabled,
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
const checkoutForm = document.getElementById("checkout-form");

if (products) {
  populateCategoryFilter();
  listProducts();
  setupAddToCartButtons();
}

displayCartItems();
isCheckoutButtonDisabled();
displayCheckoutItems();
updateCartTotal();

if (checkoutForm) {
  setupCheckout();
}
