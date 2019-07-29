"use strict";

/* This is a function that uses indexOf and .substr to break up names
* @param name (text string) - the entered name
* @param firstName (text string) - the parsed first name
* @param lastName (text string) - the parsed last name */

function parseAndDisplayName(name)
{
    let firstName, lastName, middleName, prefix, suffix;
    let pos1 = name.indexOf(" ");
    let pos2 = name.lastIndexOf(" ");

    //if prefixes are Mr. or Dr.
    if (name.substring(0,3) == "Mr." || name.substring(0,3) == "Dr.")
    {
        prefix = name.substring(0,3);
        name = name.substr(4);
        console.log("Name: " + name);
        console.log("Prefix: " + prefix);
    }
    //if prefixes are Miss or Mrs.
    else if (name.substring(0,4) == "Miss" || name.substring(0,4) == "Mrs.")
    {
        prefix = name.substring(0,4);
        name = name.substr(4);
        console.log("Name: " + name);
        console.log("Prefix: " + prefix);
    }
    //otherwise
    else 
    {
        // This is what is used if a person only has one name
        if (pos1 == -1)
        {
            console.log("Name: " + name);
            console.log("Only Name: " + name);
        }
        // This is what is used if a person has a first and last name
        else if (pos2 == pos1)
        {
            firstName = name.substring(0, pos1);
            lastName = name.substring(pos1 + 1);
            
            console.log("Name: " + name)
            console.log("First Name: " + firstName);
            console.log("Last Name: " + lastName);

        }
        //This is what is used if a person has a first, middle, and last name
        else
        {
            firstName = name.substring(0, pos1);
            middleName = name.substring(pos1 + 1, pos2)
            lastName = name.substring(pos2 + 1);  
            console.log("Name: " + name);
            console.log("First Name: " + firstName);
            console.log("Middle Name: " + middleName);
            console.log("Last Name: " + lastName);
        }
    }
}

parseAndDisplayName("Cher");
parseAndDisplayName("Mrs. Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");