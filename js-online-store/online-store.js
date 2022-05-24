// declaration of variables//
let productName=prompt("Enter Requested Product Name")
let productPrice= Number(prompt("Enter Requested Price"))
let productQuantity=Number(prompt("Enter Quantity of Items"))

//determine formulas//
let subTotal= productPrice * productQuantity
let tax= .07 * subTotal
let total= subTotal + tax

// functions: price, tax, and display 
document.write(`
    <p>Product: ${productName}</p>
    <p>Price per Unit: $${productPrice}</p>
    <p>Quantity: ${productQuantity}</p>
    <p>Sub-Total: $${subTotal}</p>
    <p>Tax: $${tax}</p>
    <p>Total: $${total}</p>
`)

console.log(`
    Product:${productName}
    Price per Unit: $${productPrice}
    Quantity: ${productQuantity}
    Sub-Total: $${subTotal}
    Tax: $${tax}
    Total: $${total}
`)