"use strict";

/* This is a function that parses product codes, given various lengths of product code details
* @param item (text string) - the entered product name
* @return supplierCode (text string) - the parsed supplier code
* @return productNumber (text string) - the parsed product number
* @return size (text string) - the parsed size */

let item, supplierCode, productNumber, size;

//this gets the supplier code from the product name
function getSupplierCode(item)
{
    let pos1 = item.indexOf(":");
    supplierCode = item.substring(0, pos1);

    console.log("The supplier code is " + supplierCode);
}

//this gets the product number from the product name
function getProductNumber(item)
{
    let pos1 = item.indexOf(":");
    let pos2 = item.indexOf("-");
    productNumber = item.substring(pos1 + 1, pos2)

    console.log("The product number is " + productNumber)
}

//this gets the size from the product name
function getSize(item)
{
    let pos2 = item.indexOf("-");
    size = item.substring(pos2 + 1);

    console.log("The size is " + size)
}

getSupplierCode("ACME:123-L");
getProductNumber("ACME:123-L");
getSize("ACME:123-L");

getSupplierCode("DI:12345-M");
getProductNumber("DI:12345-M");
getSize("DI:12345-M");

getSupplierCode("ACE:1-12");
getProductNumber("ACE:1-12");
getSize("ACE:1-12");