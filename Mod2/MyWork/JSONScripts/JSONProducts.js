"use strict";

//this does something because I'm sick of writing descriptions

let object1 = 
{
    productId: "1234asdf",
    productName: "sunglasses",
    unitPrice: "$14.99",
    quantity: "4"
}

let str = JSON.stringify(object1);
console.log(str);

let object2 = JSON.parse(str);
console.log(object2);