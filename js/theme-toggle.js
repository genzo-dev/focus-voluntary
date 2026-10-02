const themeButton = document.getElementById("theme-button");

themeButton?.addEventListener("click", toggleTheme);

function getTheme() {
  return localStorage.getItem("theme") ?? "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function loadTheme() {
  setTheme(getTheme());
}

export function toggleTheme() {
  const currentTheme = getTheme();

  setTheme(currentTheme === "dark" ? "light" : "dark");
  toggleThemeButton();
}

export function toggleThemeButton() {
  const savedTheme = getTheme();

  themeButton.innerHTML = `
    <img
      src="/assets/images/${savedTheme === "dark" ? "sun" : "moon"}.svg"
      alt="Mudar tema"
    />
  `;
}
