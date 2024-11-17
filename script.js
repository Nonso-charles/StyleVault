// Toggle mobile menu
document.getElementById('menuButton').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

  // JavaScript for adding products to the cart
  document.addEventListener('DOMContentLoaded', () => {
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');
      let cart = [];

      function updateCart() {
          // Clear cart display
          cartItems.innerHTML = '';
          let total = 0;

          cart.forEach((item, index) => {
              total += item.price;

              // Create a cart item element
              const itemElement = document.createElement('li');
              itemElement.classList.add('cart-item', 'p-4', 'bg-gray-50', 'rounded', 'shadow');
              itemElement.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="text-red-500 ml-4" onclick="removeFromCart(${index})">Remove</button>
          `;
              cartItems.appendChild(itemElement);
          });

          // Update total
          cartTotal.textContent = `Total: $${total.toFixed(2)}`;
      }

      function removeFromCart(index) {
          cart.splice(index, 1);
          updateCart();
      }

      document.querySelectorAll('.add-to-cart-btn').forEach(button => {
          button.addEventListener('click', () => {
              const name = button.getAttribute('data-name');
              const price = parseFloat(button.getAttribute('data-price'));

              // Add item to the cart array
              cart.push({ name, price });
              updateCart();
          });
      });
  });
  
   // JavaScript for filtering collections
   document.addEventListener('DOMContentLoaded', () => {
       const filterButtons = document.querySelectorAll('.filter-btn');
       const collectionItems = document.querySelectorAll('.collection-item');

       filterButtons.forEach(button => {
           button.addEventListener('click', () => {
               const category = button.getAttribute('data-category');

               collectionItems.forEach(item => {
                   if (category === 'all' || item.getAttribute('data-category') === category) {
                       item.classList.remove('hidden');
                   } else {
                       item.classList.add('hidden');
                   }
               });
           });
       });
   });
   
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // You can add more form validation and submission logic here

    // Show a success message (you can replace this with real submission logic)
    alert(`Registration successful! Welcome, ${username}!`);

    // Clear form
    document.getElementById("registration-form").reset();
});