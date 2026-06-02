// Book Button
const bookBtn = document.getElementById("bookBtn");

if(bookBtn){
    bookBtn.addEventListener("click", function(){
        alert("Thank you for choosing Raj Creative Studios!");
    });
}

// Contact Button
const contactBtn = document.getElementById("contactBtn");

if(contactBtn){
    contactBtn.addEventListener("click", function(){
        window.location.href = "tel:+917302313324";
    });
}

// Mobile Menu
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}