document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalAmountElement = document.getElementById("total-amount");
    let totalAmount = 0;

    // Function to add item to cart
    function addItemToCart(name, price) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${name} - $${price.toFixed(2)}</p>
            <button class="remove-item">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Update total amount
        totalAmount += price;
        totalAmountElement.textContent = totalAmount.toFixed(2);

        // Add event listener to remove button
        cartItem.querySelector(".remove-item").addEventListener("click", () => {
            removeItemFromCart(cartItem, price);
        });
    }

    // Function to remove item from cart
    function removeItemFromCart(cartItem, price) {
        cartItemsContainer.removeChild(cartItem);

        // Update total amount
        totalAmount -= price;
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    // Example items to add to cart
    addItemToCart("Pizza", 9.99);
    addItemToCart("Burger", 5.49);

    // Checkout button functionality (for example)
    document.getElementById("checkout-button").addEventListener("click", () => {
        document.getElementById("payment-method").style.display = "block";
    });

    // Payment form submission
    document.getElementById("payment-form").addEventListener("submit", (event) => {
        event.preventDefault();
        // Handle payment processing here
        alert("Payment processed!");
    });
});
