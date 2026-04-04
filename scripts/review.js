// Get current count or set to 0
let count = localStorage.getItem("reviewCount") || 0;

// Increment
count++;

// Save back
localStorage.setItem("reviewCount", count);

// Display
document.getElementById("counter").textContent = count;

