"use strict";

//This is a function that changes a word in a string
let message = "Our corporate offices are located in Dallas";

let newMessage = message.replace(/DALLAS/i, "Hartford");

console.log(newMessage);