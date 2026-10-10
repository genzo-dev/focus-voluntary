import { games, platforms } from "../mocks/game-data.js";
import { addToCart } from "./cart.js";

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("product-search");
const categoryFilter = document.getElementById("category-filter");

function listPlatforms(gamePlatforms) {
  return gamePlatforms
    .map((platform) => {
      const platformData = platforms[platform];
      return `
      <li class="flex items-center justify-center gap-2 bg-[var(--color-border)] px-2 py-1 rounded max-w-32">
        <img src="${platformData.icon}" alt="${platformData.name}" class="max-w-8" />
        <span class="text-xs text-[var(--color-text)] ">${platformData.name}</span>
      </li>
    `;
    })
    .join("");
}

export function listProducts(products = games) {
  productsContainer.innerHTML = products
    .map((game) => {
      return `
      <div class="flex flex-col gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] rounded shadow hover:shadow-lg hover:scale-102 transition">
        <img src="${game.imageUrl}" alt="${game.name}" class="w-full h-48 object-cover" />
        <div class="p-4 flex-1 flex flex-col gap-2">
          <h3>${game.name}</h3>
          <ul class="flex flex-wrap gap-2">
            ${listPlatforms(game.platforms)}
          </ul>
          <p class="text-sm">${game.description}</p>
          </div>
          <div class="flex items-center justify-between px-4 pb-4">
            <span class="text-sm sm:text-base">R$ ${game.price.toFixed(2)}</span>
            <button data-game-id="${game.id}" class="add-to-cart bg-green-700 text-white text-xs sm:text-base py-2 px-4 rounded hover:bg-green-800 cursor-pointer transition">Adicionar ao carrinho</button>
          </div>
      </div>
    `;
    })
    .join("");
}

export function setupAddToCartButtons() {
  productsContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".add-to-cart");

    if (!button) return;

    const gameId = Number(button.dataset.gameId);

    addToCart(gameId);
  });
}

function filterProducts() {
  const normalizedQuery = searchInput.value.trim().toLowerCase();

  const selectedCategory = categoryFilter.value;

  const filteredGames = games.filter((game) => {
    const matchesName = game.name.toLowerCase().includes(normalizedQuery);

    const matchesCategory =
      !selectedCategory || game.genre === selectedCategory;

    return matchesName && matchesCategory;
  });

  listProducts(filteredGames);
}

searchInput?.addEventListener("input", filterProducts);

categoryFilter?.addEventListener("change", filterProducts);

searchInput?.addEventListener("input", (event) => {
  searchProducts(event.target.value);
});

function getCategories() {
  return [
    ...games.reduce((categories, game) => {
      categories.add(game.genre);

      return categories;
    }, new Set()),
  ];
}

export function populateCategoryFilter() {
  const categories = getCategories();

  categoryFilter.innerHTML = `
    <option value="">Todas as categorias</option>
    ${categories
      .map(
        (category) => `
          <option value="${category}">${category}</option>
        `,
      )
      .join("")}
  `;
}
