"use strict";

//This function should return the date and day of the week in a given format (day-month-year(weekdayname))

let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let month = months[date.getMonth()];
let day = days[date.getDay()];

console.log(date.getDate() + "-" + month + "-" + date.getFullYear() + " (" + day + ")");