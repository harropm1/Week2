"use strict";

//using arrays for the first time in functions

function getAverage(scores)
{
    let sum = 0;
    for (let i = 0; i < scores.length; i++)
    {
        sum += scores[i];
    }
    let averageScoreReturn = sum/scores.length;
    return averageScoreReturn;
}

let myScores = [97, 85, 98, 87, 92, 89, 100];
let averageScore = getAverage(myScores)
console.log(averageScore.toFixed(2));