var cart = [];
var cartItems = [];
var productName = ["Apple", "Taco", "Sushi", "Water", "Cheese", "Watermelon"];
var productPrice = [1.00, 2.00, 4.25, 2.50, 1.50, 7.00];
function AddToCart(i) {
    cart.push(productPrice[i]);
    cartItems.push(productName[i]);
}
function getTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++)
    {
        total += cart[i];
    }
    console.log("Your total is: $" + total);

}
function displayCart() {
    console.clear();
    for (var i = 0; i < cart.length; i++) {
        console.log(cartItems[i]);
    }
    getTotal();
}