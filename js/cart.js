import { games } from "../mocks/game-data.js";

const productsCart = document.getElementById("products-local-storage");

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

  console.log("Adicionado ao carrinho:", game.name);
}

export function displayCartItems() {
  const cartItems = getCartItems();
  productsCart.innerHTML = cartItems.map((games) => {
    return `
      <div class="flex flex-col gap-2 border rounded shadow hover:shadow-lg hover:scale-102 transition">
        <img src="${games.imageUrl}" alt="${games.name}" class="w-full h-48 object-cover" />
        <div class="p-4 flex-1 flex flex-col gap-2">
          <h3>${games.name} * Quantidade: ${games.qtdCart}</h3>
          <p class="text-sm">${games.description}</p>
          </div>
          <div class="flex items-center justify-between px-4 pb-4">
            <span>R$ ${games.price.toFixed(2)}</span>
          </div>
      </div>
    `;
  });
}
