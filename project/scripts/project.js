document.addEventListener("DOMContentLoaded", () => {

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Display temples if container exists
if (document.getElementById("templeContainer")) {
displayTemples(temples);
}

// Load review count
let count = localStorage.getItem("reviews") || 0;
if (document.getElementById("reviewCount")) {
document.getElementById("reviewCount").textContent = count;
}

});

// Temple Data
const temples = [
{ name: "Aba Nigeria", year: 2005, area: 11500, img: "images/temple.jpg" },
{ name: "Manti Utah", year: 1888, area: 74792, img: "images/temple.jpg" },
{ name: "Payson Utah", year: 2015, area: 96630, img: "images/temple.jpg" },
{ name: "Salt Lake", year: 1893, area: 253000, img: "images/temple.jpg" }
];

// Display function
function displayTemples(data) {
const container = document.getElementById("templeContainer");
container.innerHTML = "";

data.forEach(t => {
container.innerHTML += `
<div class="card">
<img src="${t.img}" loading="lazy" alt="${t.name}">
<h3>${t.name}</h3>
<p>Year: ${t.year}</p>
<p>Area: ${t.area}</p>
</div>
`;
});
}

// Filter function
function filterTemples(type) {
let filtered = temples;

if (type === "old") filtered = temples.filter(t => t.year < 1900);
if (type === "new") filtered = temples.filter(t => t.year > 2000);
if (type === "large") filtered = temples.filter(t => t.area > 90000);
if (type === "small") filtered = temples.filter(t => t.area < 10000);

displayTemples(filtered);
}

// Form + localStorage
const form = document.getElementById("reviewForm");

form?.addEventListener("submit", () => {
let count = localStorage.getItem("reviews") || 0;
count++;
localStorage.setItem("reviews", count);
});