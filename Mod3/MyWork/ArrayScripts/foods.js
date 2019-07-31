"use strict";

//making arrays work with two variables in each slot

function getBill(lunch)
{
    let subtotal = 0;

    for (let i = 0; i < lunch.length; i ++)
    {
        subtotal = subtotal + lunch[i].price;
        console.log(lunch[i].item + " $" + lunch[i].price);
    }
    let tax = .08 * subtotal;
    let tip = .18 * subtotal;
    let total =  subtotal + tax + tip;
    
    let bill = {
        finalSubtotal: subtotal,
        finalTax: tax,
        finalTip: tip,
        finalTotal: total
    }

    return bill;
}

let myLunch = [
    {item: "Steak fajitas", price: 9.95},
    {item: "Chips and Gaucamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];
let bill = getBill(myLunch);
console.log("\nSubtotal: $" + bill.finalSubtotal.toFixed(2));
console.log("Tax: $" + bill.finalTax.toFixed(2));
console.log("Tip: $" + bill.finalTip.toFixed(2));
console.log("Total: $" + bill.finalTotal.toFixed(2));
