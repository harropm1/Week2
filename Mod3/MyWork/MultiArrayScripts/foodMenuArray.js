"use strict";

//this script is using multidimensional arrays to display menu items

let menu = [
    //breakfast menu, array 0
    [{item: "Sausage and Egg Biscuit", price: 3.49}, {item: "Three Pancakes", price: 5.49}, {item: "Scrambled Eggs", price: 3.49}],
    //lunch menu, array 1
    [{item: "Turkey Club", price: 6.49}, {item: "Grilled Cheese", price: 4.49}, {item: "Cheeseburger", price: 6.99}, {item: "Cheeseburger with Fries", price: 8.49}],
    //dinner menu, array 2 
    [{item: "Steak", price: 25.99}, {item: "Chicken", price: 15.99}, {item: "Pasta", price: 16.49}, {item: "Salmon", price: 20.99}, {item: "Fish and Chips", price: 14.99}]
];

//user input of which menu was chosen
let meal = 2;

//which menu is printing
if (meal == 0)
{
    console.log("Breakfast Menu:");
}
else if (meal == 1)
{
    console.log("Lunch Menu:");
}
else
{
    console.log("Dinner Menu:");
}

//how the items and prices are printed out
for (let j = 0; j < menu[meal].length; j++)
{
    console.log(menu[meal][j].item + ", $" + menu[meal][j].price)
}