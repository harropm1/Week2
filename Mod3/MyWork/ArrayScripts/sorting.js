"use strict";

//these functions sort objects in array by different properties

//this functions sorts names in ascending order
function compareNameAscending(a,b)
{
    if (a.name <= b.name)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

//this function sorts names in descending order
function compareNameDescending(a,b)
{
    if (a.name >= b.name)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

//this function sorts ages in ascending order
function compareAgeAscending(a,b)
{
    if (a.age <= b.age)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

//this function sorts ages in ascending order
function compareAgeDescending(a,b)
{
    if (a.age >= b.age)
    {
        return -1;
    }
    else
    {
        return 1;
    }
}

//this is the array with the properties
let people = [
    {name: "Michelle", age: 29},
    {name: "Zach", age: 28},
    {name: "Megan", age: 26},
    {name: "Peggy", age: 63},
    {name: "Bob", age: 63},
    {name: "Kathy", age: 64},
    {name: "Steve", age: 64},
];

people.sort(compareNameAscending);
console.log("Names Ascending");
console.log(people);

people.sort(compareNameDescending);
console.log("\nNames Descending");
console.log(people);

people.sort(compareAgeAscending);
console.log("\nAges Ascending");
console.log(people);

people.sort(compareAgeDescending);
console.log("\nAges Descending");
console.log(people);
