const hamburger = document.querySelector('.hamburger');
const navbar_moblie = document.querySelector(".navbar_moblie");
const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
const sidebarCheckbox = document.getElementById('sidebar-checkbox'); // Get the checkbox element

// Function to close the navigation bar
function closeNavBar() {
    navbar_moblie.style.opacity = '0';
    navbar_moblie.style.transform = 'translatex(-100%)';
    hamburger.style.color = 'rgb(255, 255, 255)';
   // Uncheck the checkbox to close the navigation bar
}

hamburger.addEventListener('click', () => {
    if (sidebarCheckbox.checked) {
        closeNavBar();
    } else {
        navbar_moblie.style.opacity = '1';
        navbar_moblie.style.transform = 'translatex(0)';
        hamburger.style.color = 'rgb(0, 0, 0)';
    }
}







);
