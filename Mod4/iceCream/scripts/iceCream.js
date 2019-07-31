"use strict";

//this calculates the price of a given icecream

window.onload = function()
{
    let numberScoopsField;
    let hotFudgeField;
    let sprinklesField;
    let whippedCreamField;
    let outputPriceField;

    numberScoopsField = document.getElementById("numberScoops");
    hotFudgeField = document.getElementById("hotFudge");
    sprinklesField = document.getElementById("sprinkles");
    whippedCreamField = document.getElementById("whippedCream");
    outputPriceField = document.getElementById("outputPrice");

    const btnCalculate = document.getElementById("calculateBtn");
    btnCalculate.onclick = function()
    {
        let price = 0;

        if (numberScoopsField.value < 0 || numberScoopsField.value > 4)
        {
            alert("You have entered an invalid number. Please only enter a number of scoops 1-3. We can't create ice cream sundaes with no ice cream or more than 3 scoops!");
        }
        else if (numberScoopsField == 1)
        {
            price = 2.50;
        }
        else if (numberScoopsField == 2)
        {
            price = 3.75;
        }
        else
        {
            price = 5.00;
        }

        if (hotFudgeField.checked)
        {
            price += 1.25;
        }

        if (sprinklesField.checked)
        {
            price += .25;
        }

        if (whippedCreamField.checked)
        {
            price += .75
        }
        
        outputPriceField.value = price;
    }
}





