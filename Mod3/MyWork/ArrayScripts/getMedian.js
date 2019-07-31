/* function getAverage(scores)
{
    let sum = 0;
    for (let i = 0; i < scores.length; i++)
    {
        sum += scores[i];
    }
    let averageScoreReturn = sum/scores.length;
    return averageScoreReturn;
} */


function getMedian(scores)
{
    let median = 0;
    if (scores.length % 2 != 0)
    {
        median = scores[Math.trunc(scores.length / 2)];
        console.log(median);
    }
    else
    {
        let firstNum = scores[scores.length / 2]
        let secondNum = scores[(scores.length / 2) - 1]
        median = (firstNum + secondNum) / 2;
        console.log(median);
    }
    return median;
}

//////////////////////////////////////////////////////

let myScores = [97, 85, 98, 87, 92, 89, 100];
let myScores2 = [80, 83, 86, 87, 92, 100]

myScores.sort(function(a,b)
{
    if (a <= b)
    {
        return -1;
    }
    else 
    {
        return 1;
    }
});


let medianScore = getMedian(myScores2)
console.log(medianScore);