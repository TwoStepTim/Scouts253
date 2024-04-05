const hamburger = document.querySelector('.hamburger');
const navbar_moblie = document.querySelector(".navbar_moblie");
const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
const sidebarCheckbox = document.getElementById('sidebar-checkbox'); // Get the checkbox element

// Function to close the navigation bar
function closeNavBar() {
    navbar_moblie.style.opacity = '0';
    navbar_moblie.style.transform = 'translatex(-100%)';
    hamburger.style.color = '#82641c';
    // Uncheck the checkbox to close the navigation bar
}

hamburger.addEventListener('click', () => {
    if (sidebarCheckbox.checked) {
        closeNavBar();
    } else {
        navbar_moblie.style.opacity = '1';
        navbar_moblie.style.transform = 'translatex(0)';
        hamburger.style.color = '#82641c';
    }
}
);

// Toggle dropdown menu when clicking on dropdown button
document.addEventListener('click', function(event) {
    var dropdownButton = event.target.closest('.dropdown') ? event.target.closest('.dropdown').querySelector('.dropbtn') : null;
    var dropdownContent = event.target.closest('.dropdown') ? event.target.closest('.dropdown').querySelector('.dropdown-content') : null;
    
    if (dropdownButton && dropdownContent) {
        if (event.target === dropdownButton) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        } else {
            dropdownContent.style.display = 'none';
        }
    }
});

