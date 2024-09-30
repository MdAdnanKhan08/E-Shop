// ---------------------hero section-------------------
let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".img-item")

console.log(imgItem.length-1)

let startSlider =  0
let endSlider = (imgItem.length-1) * 100 

slideBtnLeft.addEventListener("click",()=>{
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

slideBtnRight.addEventListener("click",()=>{
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }

    console.log(startSlider)
    
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})


// ----------------Cart----------------------------
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
  // Add product to cart
  cart.push({ productName, price });
  // Save cart data to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  // Redirect to the cart page
  window.location.href = "cart.html";
}


// -----------------sidebar navigation----------------

const sidebarNavigationE1 = document.getElementById("sidebar-container-nav-id")
const sidebarOpenNavigationE1 = document.getElementById("panel-all-id")
const sidebarCloseNavigationE1 = document.getElementById("sidebar-cross-btn")

console.log(sidebarNavigationE1)

sidebarOpenNavigationE1.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("slidebar-show")
})

sidebarCloseNavigationE1.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("slidebar-show")
})

// ------------------Shop Section--------------------

let cart = [];

function addToCart(productName, price) {
  // Add product to cart
  cart.push({ productName, price });
  // Save cart data to localStorage for persistence across pages
  localStorage.setItem('cart', JSON.stringify(cart));
  // Redirect to the cart page
  window.location.href = "cart.html";
}

// ---------------------------------Login Section---------------------------

