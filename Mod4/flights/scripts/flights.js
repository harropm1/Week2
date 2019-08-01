"use strict";

//this calculates the price of a rental car by using functions with parameters

//get subtotal of rental with number of days and car types pulled in
function findFlights(flights, depart, arrive)
{
    let str = "";
    for (let i = 0; i < flights.length; i++)
    {
        if (depart == flights[i].depart && arrive == flights[i].arrive)
        {
            str += ("Flight Number " + flights[i].flightNo + " from " + flights[i].depart + " to " + flights[i].arrive + " leaves at " + flights[i].time)
        }
    }
    return str;
}

window.onload = function()
{
    //defining variables
    let departField = document.getElementById("depart");
    let arriveField = document.getElementById("arrive");

    let flights = [
        {depart: "LAX", arrive: "LAS", flightNo: "100", time: "6:00"},
        {depart: "LAX", arrive: "EWR", flightNo: "101", time: "6:30"},
        {depart: "LAX", arrive: "MCO", flightNo: "102", time: "7:00"},
        {depart: "LAS", arrive: "LAX", flightNo: "103", time: "7:30"},
        {depart: "LAS", arrive: "EWR", flightNo: "104", time: "8:00"},
        {depart: "LAS", arrive: "MCO", flightNo: "105", time: "8:30"},
        {depart: "EWR", arrive: "LAX", flightNo: "106", time: "9:00"},
        {depart: "EWR", arrive: "LAS", flightNo: "107", time: "9:30"},
        {depart: "EWR", arrive: "MCO", flightNo: "108", time: "10:00"},
        {depart: "MCO", arrive: "LAX", flightNo: "109", time: "10:30"},
        {depart: "MCO", arrive: "LAS", flightNo: "110", time: "11:00"},
        {depart: "MCO", arrive: "MWR", flightNo: "111", time: "11:30"}
    ];

    const btnFindFlight = document.getElementById("findFlight");
    btnFindFlight.onclick = function()
    {
        let possibleFlights = findFlights(flights, departField.value, arriveField.value);
        availFlights.innerHTML = possibleFlights;
    }
}