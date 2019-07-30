"use strict";

//this script defines javascript objects and then passes them through a function that will print each like a mailing label

function printContact(contact)
{
    console.log(contact.name + "\n" + contact.address + "\n" + contact.city 
    + ", " + contact.state + " " + contact.zip);
}

let contact1 = {
    name:"Pursalane Faye",
    address:"121 Main Street",
    city:"Benbrook",
    state:"Texas",
    zip:"76126"
};

let contact2 = {
    name:"Megan Harrop",
    address:"10 Longview Rd",
    city:"Livingston",
    state:"New Jersey",
    zip:"07039"
};

printContact(contact1);
printContact(contact2);