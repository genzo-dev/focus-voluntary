import { displayCartItems, updateCartTotal } from "./cart.js";
import { listProducts, setupAddToCartButtons } from "./product.js";
import { loadTheme, toggleThemeButton } from "./theme-toggle.js";

loadTheme();
toggleThemeButton();

listProducts();
setupAddToCartButtons();
// searchProducts();

displayCartItems();
updateCartTotal();
