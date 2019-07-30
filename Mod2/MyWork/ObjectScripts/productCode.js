"use strict";

//this script will parse the part code from a JavaScript object


//itemNumbers are in this format: WIS:456789-S
function parsePartCode(itemNumber)
{
    let pos1 = itemNumber.indexOf(":");
    let pos2 = itemNumber.indexOf("-");
    let parsedSupplierCode = itemNumber.substring(0, pos1);    
    let parsedProductNumber = itemNumber.substring(pos1 + 1, pos2);
    let parsedSize = itemNumber.substring(pos2 + 1);

    let itemNumberReturn = {
        supplierCode: parsedSupplierCode,
        productNumber: parsedProductNumber,
        size: parsedSize,
    };
    return itemNumberReturn;
}

let itemNumber1 = "XYZ:1234-L";
let item1 = parsePartCode(itemNumber1);
console.log("Supplier: " + item1.supplierCode + ", Product Number: " + item1.productNumber + ", Size: " + item1.size);