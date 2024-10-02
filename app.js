// ---------------------Hero Section Image Slider-------------------
// Handles the image slider, manual scrolling (left and right buttons),
// and automatic scrolling functionality for the hero section.
let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".img-item");

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100; 

// Manual Scrolling for Image Slider
slideBtnLeft.addEventListener("click", () => {
    if (startSlider < 0) {
        startSlider += 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});

slideBtnRight.addEventListener("click", () => {
    if (startSlider >= -endSlider + 100) {
        startSlider -= 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});

// Automatic Scrolling for Image Slider
function autoScrollSlider() {
    if (startSlider >= -endSlider + 100) {
        startSlider -= 100;
    } else {
        startSlider = 0; // Reset to the beginning after reaching the end
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

// Automatically scroll every 5 seconds
let autoScroll = setInterval(autoScrollSlider, 5000);

// Pause auto scroll when hovering over the left or right buttons
slideBtnLeft.addEventListener("mouseenter", () => clearInterval(autoScroll));
slideBtnRight.addEventListener("mouseenter", () => clearInterval(autoScroll));
slideBtnLeft.addEventListener("mouseleave", () => autoScroll = setInterval(autoScrollSlider, 5000));
slideBtnRight.addEventListener("mouseleave", () => autoScroll = setInterval(autoScrollSlider, 5000));

// Optional: Handle window resizing for responsiveness
window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        // Optionally, handle mobile-specific behavior here
    }
});

// ----------------Cart Section----------------------------
// Code for handling cart functionality such as adding items to the cart
// and storing the cart data in localStorage.
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
  // Add the selected product to the cart
  cart.push({ productName, price });
  // Store the cart in localStorage to persist across page loads
  localStorage.setItem('cart', JSON.stringify(cart));
  // Redirect to the cart page after adding an item
  window.location.href = "cart.html";
}

// ----------------Sidebar Navigation Section-------------------
// Handles the sidebar open and close functionality for the navigation menu.
const sidebarNavigationE1 = document.getElementById("sidebar-container-nav-id");
const sidebarOpenNavigationE1 = document.getElementById("panel-all-id");
const sidebarCloseNavigationE1 = document.getElementById("sidebar-cross-btn");

// Toggle sidebar visibility on click
sidebarOpenNavigationE1.addEventListener("click", () => {
    sidebarNavigationE1.classList.add("slidebar-show");
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
});

// Close sidebar when the cross button is clicked
sidebarCloseNavigationE1.addEventListener("click", () => {
    sidebarNavigationE1.classList.remove("slidebar-show");
    // Restore background scrolling
    document.body.style.overflow = "auto";
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (e) => {
    if (!sidebarNavigationE1.contains(e.target) && !sidebarOpenNavigationE1.contains(e.target)) {
        sidebarNavigationE1.classList.remove("slidebar-show");
        document.body.style.overflow = "auto";
    }
});

// Stop click events within the sidebar from closing it
sidebarNavigationE1.addEventListener("click", (e) => {
    e.stopPropagation();
});

// ----------------Navbar and Panel Responsiveness-------------------
// This section handles the responsiveness of the navbar and panels,
// adjusting the display of the search bar and the sidebar layout based on screen size.
function handleResponsiveChanges() {
    const screenWidth = window.innerWidth;
    const navSearch = document.querySelector('.nav-search');
    const searchIcon = document.querySelector('.search-icon');
    
    // Adjust the navbar depending on screen width
    if (screenWidth <= 768) {
        // On mobile, hide the search bar and show the search icon
        navSearch.style.display = 'none';
        searchIcon.style.display = 'block';
    } else {
        // On desktop, show the search bar and hide the search icon
        navSearch.style.display = 'flex';
        searchIcon.style.display = 'none';
    }
    
    // Handle scrolling for the main panel in the layout
    const panel = document.querySelector('.panel');
    if (screenWidth <= 768) {
        // Enable horizontal scrolling for smaller screens
        panel.style.overflowX = 'scroll';
    } else {
        // Disable horizontal scrolling for larger screens
        panel.style.overflowX = 'hidden';
    }
}

// Event listener to handle responsive changes on window resize
window.addEventListener('resize', handleResponsiveChanges);

// Trigger the responsive changes function on page load
document.addEventListener('DOMContentLoaded', handleResponsiveChanges);
