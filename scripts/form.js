// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Product Array (UPDATED)
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate Product Select
const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");

    // REQUIRED by assignment:
    option.value = product.id;        // value = id
    option.textContent = product.name; // display = name
option.textContent = `${product.name} (⭐ ${product.averagerating})`;
    select.appendChild(option);
});