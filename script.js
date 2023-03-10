const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value;
  const response = await fetch("http://localhost:3000/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  displayResults(data);
});

function displayResults(results) {
  searchResults.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result.name;
    searchResults.appendChild(li);
  });
}
