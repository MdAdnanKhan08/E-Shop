function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    let totalAmount = 0;
  
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty</p>';
    } else {
      cart.forEach((item, index) => {
        const productBox = document.createElement('div');
        productBox.className = 'cart-box';
  
        productBox.innerHTML = `
          <img src="path_to_image/${item.productName}.jpg" alt="${item.productName}">
          <h4>${item.productName}</h4>
          <p class="price">₹${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        `;
  
        cartItems.appendChild(productBox);
        totalAmount += item.price;
      });
    }
  
    totalAmountElement.textContent = `Total: ₹${totalAmount}`;
  }
  
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item at the index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    renderCart(); // Re-render the cart
  }
  
  window.onload = renderCart;
  