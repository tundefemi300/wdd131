// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values (from page)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind Chill Function (Metric)
function calculateWindChill(t, v) {
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);
}

// Apply conditions
let windChillValue = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChillValue = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windChill").textContent = windChillValue;