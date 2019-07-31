"use strict";

//this is the set up for a bunch of different flights

//outputs: possibleFlights
function getFlight(departureCity, arrivalCity, travelDate)
{

}

//inputs: departureCity, arrivalCity, travelDate
let departureCityField = "EWR";
let arrivalCityField = "MCO";
let travelDateField = new Date();

//flights
let flightInfo = [
    {flightNumber: "1230", depart: "EWR", arrive: "MCO", time: "10:00", price: 250, day: "TuWeTh"},
    {flightNumber: "1234", depart: "EWR", arrive: "MCO", time: "9:00", price: 340, day: "SuMoFrSa"},
    {flightNumber: "4560", depart: "BDL", arrive: "DEN", time: "8:00", price: 450, day: "SuMoFrSa"},
    {flightNumber: "4567", depart: "BDL", arrive: "DEN", time: "6:00", price: 240, day: "MoTuWeThFr"},
    {flightNumber: "7891", depart: "DEN", arrive: "EWR", time: "11:00", price: 350, day: "SuTuThSa"},
    {flightNumber: "7890", depart: "DEN", arrive: "EWR", time: "7:00", price: 360, day: "MoWeFr"}
];

//labeling days
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
