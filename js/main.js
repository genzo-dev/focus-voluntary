import { displayCartItems, updateCartTotal } from "./cart.js";
import { listProducts, setupAddToCartButtons } from "./product.js";

listProducts();
setupAddToCartButtons();

displayCartItems();
updateCartTotal();
