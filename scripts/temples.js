// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // hamburger icon
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        hamburger.innerHTML = '&times;'; // X icon
    }
});

// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;