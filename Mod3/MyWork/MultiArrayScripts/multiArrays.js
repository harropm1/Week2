"use strict";

//this script is using multidimensional arrays

let teamMembers = [
    ['Dana', 'Brenda', 'Happy'],
    ['Laura', 'Patti'],
    ['Leslye', 'Randy', 'Mollye', 'Ranse'],
    ['Eloise', 'Robert']
]

let numberTeams = teamMembers.length;
for (let i = 0; i < numberTeams; i++)
{
    console.log("\nTeam " + i);

    let numberMembers = teamMembers[i].length;
    for (let j = 0; j < numberMembers; j++)
    {
        console.log(teamMembers[i][j]);
    }
}