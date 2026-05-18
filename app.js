const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const tiles = Array.from(document.querySelectorAll(".game-tile"));
const noResults = document.querySelector("#noResults");

function filterGames() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  tiles.forEach((tile) => {
    const matches = tile.dataset.title.includes(query);
    tile.classList.toggle("is-hidden", !matches);
    if (matches) {
      visibleCount += 1;
    }
  });

  noResults.classList.toggle("is-visible", visibleCount === 0);
}

searchInput.addEventListener("input", filterGames);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstVisible = tiles.find((tile) => !tile.classList.contains("is-hidden"));
  if (firstVisible) {
    firstVisible.focus();
  }
});
