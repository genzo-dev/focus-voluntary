import { games } from "../mocks/game-data.js";

const productsCart = document.getElementById("products-local-storage");
const cartButton = document.getElementById("cart-button");

cartButton?.addEventListener("click", toggleCart);

function getCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return Array.isArray(cart) ? cart : [];
}

export function addToCart(gameId) {
  const game = games.find((game) => game.id === gameId);

  if (!game) return;

  const cartItems = getCartItems();
  const existingItem = cartItems.find((item) => item.id === gameId);

  if (existingItem) {
    existingItem.qtdCart += 1;
  } else {
    cartItems.push({
      ...game,
      qtdCart: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));

  if (productsCart) {
    displayCartItems();
  }

  updateCartTotal();

  console.log("Adicionado ao carrinho:", game.name);
}

export function displayCartItems() {
  const cartItems = getCartItems();
  productsCart.innerHTML = cartItems
    .map((games) => {
      return `
      <div class="flex flex-col lg:flex-row border rounded shadow hover:shadow-lg transition backdrop-blur-lg">
        <div class="lg:w-1/3">
          <img src="${games.imageUrl}" alt="${games.name}" class="w-full h-32 lg:h-36 object-cover" />
        </div>
        <div class="lg:w-2/3 px-4 py-2 lg:py-4 flex flex-col">
          <div class="flex items-center justify-between">
            <h3 class="text-white text-lg font-semibold mb-2">${games.name}</h3>
            <p class="text-white mb-2">${games.qtdCart}x</p>
          </div>

          <div class="flex items-center justify-between">
            <p>A pagar:</p>
            <span class="text-white font-semibold mb-2">R$ ${(games.price.toFixed(2) * games.qtdCart).toFixed(2)}</span>
          </div>

          <div class="flex items-center justify-end gap-2 my-2 lg:mt-auto">
            <button class="text-sm text-gray-400 hover:text-white cursor-pointer underline" title="Adicionar uma cópia desse item">Adicionar</button>
            <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
            <button class="text-sm text-gray-400 hover:text-white cursor-pointer underline" title="Remover do carrinho">Remover</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

export function updateCartTotal() {
  const cartItems = getCartItems();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qtdCart,
    0,
  );

  const cartTotal = document.getElementById("cart-total");

  if (cartTotal) {
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
}

export function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  if (cartContainer) {
    cartContainer.classList.toggle("hidden");
  }
}
