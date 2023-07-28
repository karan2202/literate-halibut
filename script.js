function addItemToCart(productId) { 
    // Get the quantity of the product to be added to the cart. 
    var quantity = document.getElementById("quantity").value; 
   
    // Create a new object to represent the product. 
    var product = { 
    id: productId, 
    quantity: quantity 
    }; 
   
    // Get the current cart from local storage. 
    var cart = JSON.parse(window.localStorage.getItem("cart")); 
   
    // If the cart doesn't exist, create a new one. 
    if (cart === null) { 
    cart = []; 
    } 
   
    // Add the product to the cart. 
    var foundProduct = false; 
    for (var i = 0; i < cart.length; i++) { 
    if (cart[i])

    ;}}

