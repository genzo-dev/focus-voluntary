const productsContainer = document.getElementById("products");

function listPlatforms(gamePlatforms) {
  return gamePlatforms
    .map((platform) => {
      const platformData = platforms[platform];
      return `
      <li class="flex items-center justify-center gap-2 bg-gray-200 p-2 rounded max-w-32">
        <img src="${platformData.icon}" alt="${platformData.name}" class="max-w-8" />
        <span class="text-xs">${platformData.name}</span>
      </li>
    `;
    })
    .join("");
}

function listProducts() {
  productsContainer.innerHTML = games
    .map((game) => {
      return `
      <div class="flex flex-col gap-2 border rounded shadow hover:shadow-lg hover:scale-102 transition">
        <img src="${game.imageUrl}" alt="${game.name}" class="w-full h-48 object-cover" />
        <div class="p-4 flex-1 flex flex-col gap-2">
          <h3>${game.name}</h3>
          <ul class="flex flex-wrap gap-2">
            ${listPlatforms(game.platforms)}
          </ul>
          <p class="text-sm">${game.description}</p>
          </div>
          <div class="flex items-center justify-between px-4 pb-4">
            <span>R$ ${game.price.toFixed(2)}</span>
            <button class="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 cursor-pointer transition">Adicionar ao carrinho</button>
          </div>
      </div>
    `;
    })
    .join("");
}

listProducts();
