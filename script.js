// Total price declared outside of function so running total can be kept
let totalPrice = 0;

/*
    Takes input from the user on the product they selected and the
    quantity they want, then displays the cost and total price of
    the order.
*/
function getOrders() {

    // Gets the form and the 2 input values taken from it
    let form = document.forms.orderForm;
    let productChosen = form.elements.product.value;
    let quantityEntered = parseFloat(form.elements.quantity.value);

    if (isNaN(quantityEntered)) {
        document.getElementById("error-message").innerHTML = "Error: Please enter a valid quantity. Whole numbers higher than 0 are required.";
    } else {
        document.getElementById("error-message").innerHTML="";

        let cost = 0;   // Price of individual item * quantity

        let products = ["Umbrella", "Rain Coat", "Swimsuit"];
        let prices = [14.99, 119.99, 40.00];
        // console.log(products+"\n"+prices)

        // Calculates cost based on product chosen and quantity entered
        for (let i = 0; i < products.length; i++) {
            if (productChosen == products[i]) {
                cost = (prices[i] * quantityEntered).toFixed(2);
            }
        }

        cost = parseFloat(cost);
        totalPrice = parseFloat(totalPrice);

        totalPrice+=cost;

        totalPrice = totalPrice.toFixed(2);

        console.log("Cost: "+cost+"\nTotal: "+totalPrice);

        document.getElementById("results").innerHTML+="<li>"+productChosen+" (Quantity: " + quantityEntered + ") --- $" + cost.toFixed(2) + "</li>";
        document.getElementById("total").innerHTML=totalPrice;
    }

}

function clearOrders() {
    totalPrice = 0;
    console.log("Total: "+totalPrice);

    document.getElementById("results").innerHTML="";
    document.getElementById("total").innerHTML=totalPrice;
}