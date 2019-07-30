"use strict";

//this script helps calculate the a future date given one date and a length of time

let insuranceStart = new Date("July 1, 2019");

let millisecsPerDay = 1000 * 60 * 60 * 24;
let insuranceTerm = millisecsPerDay * 90

let endDateMillisecs = insuranceStart.getTime() + insuranceTerm

let insuranceEnd = new Date(endDateMillisecs);

console.log("The insurance policy starts on " + insuranceStart.toLocaleDateString() + " and ends on " + insuranceEnd.toLocaleDateString());