"use strict";

//this calculates the price of a given ice cream by using a function with parameters

function getPrice(numberScoops, hotFudge, sprinkles, whippedCream)
{
    if (numberScoops < 0 || numberScoops > 4)
        {
            alert("You have entered an invalid number. Please only enter a number of scoops 1-3. We can't create ice cream sundaes with no ice cream or more than 3 scoops!");
        }
        else if (numberScoops == 1)
        {
            price = 2.50;
        }
        else if (numberScoops == 2)
        {
            price = 3.75;
        }
        else
        {
            price = 5.00;
        }

        if (hotFudge)
        {
            price += 1.25;
        }

        if (sprinkles)
        {
            price += .25;
        }

        if (whippedCream)
        {
            price += .75
        }
        return price;
}


window.onload = function()
{
    let numberScoopsField = document.getElementById("numberScoops");
    let hotFudgeField = document.getElementById("hotFudge");
    let sprinklesField = document.getElementById("sprinkles");
    let whippedCreamField = document.getElementById("whippedCream");
    let outputPriceField = document.getElementById("outputPrice");

    const btnCalculate = document.getElementById("calculateBtn");
    btnCalculate.onclick = function()
    {
        let price = 0;

        price = getPrice(numberScoopsField.value, hotFudgeField.checked, sprinklesField.checked, whippedCreamField.checked);

        outputPriceField.value = price.toFixed(2);
    }
}





