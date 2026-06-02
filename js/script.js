// ======================
// Raj Creative Studios
// Main JavaScript File
// ======================

// Book Now Button
const bookBtn = document.getElementById("bookBtn");

if (bookBtn) {
    bookBtn.addEventListener("click", function () {
        alert("Thank you for choosing Raj Creative Studios!");
    });
}

// Contact Button
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        window.location.href = "tel:+917302313324";
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }
}

// Close Menu After Clicking a Link
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const navbar = document.getElementById("navbar");

            if (navbar) {
                navbar.classList.remove("active");
            }
        });
    });

});

function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: "Raj Creative Studios",
            text: "Check out Raj Creative Studios!",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Website link copied!");
    }
}