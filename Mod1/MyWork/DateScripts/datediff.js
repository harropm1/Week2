"use strict";

//this script helps calculate the number of days between two given dates

let date1 = new Date("July 22, 2019");
let date2 = new Date("September 6, 2019");

let millisecsPerDay = 1000 * 60 * 60 * 24;

let elapsedMillisecs = date2.getTime() - date1.getTime();

let dayDifference = elapsedMillisecs / millisecsPerDay;
let numberOfDays = Math.ceil(dayDifference + 1);

console.log("The number of days between the start and end dates of bootcamp is " + numberOfDays);