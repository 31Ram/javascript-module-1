
function calculateSalesTax(valorProducto) {
  let impuesto = (valorProducto*20)/100;
  return (valorProducto+impuesto);
}

function addTaxAndFormatCurrency(valorProducto) {
  let impuesto = (valorProducto*20)/100;
  return(`£`+(valorProducto+impuesto).toFixed(2));
}

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15), 18)
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5), 21)
test("calculateSalesTax function - case 3 works", calculateSalesTax(34), 40.8)

test("addTaxAndFormatCurrency function - case 1 works", addTaxAndFormatCurrency(15), "£18.00")
test("addTaxAndFormatCurrency function - case 2 works", addTaxAndFormatCurrency(17.5), "£21.00")
test("addTaxAndFormatCurrency function - case 3 works", addTaxAndFormatCurrency(34), "£40.80")
