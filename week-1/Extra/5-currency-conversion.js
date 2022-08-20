
function convertToUSD(cambio) {
  return ((cambio*1.4)/1.0);
}

function convertToBRL(cambio) {
  return (((cambio*5.7)/1.0)-((1.0*5.7)/100));
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

test("convertToUSD function works", convertToUSD(32), 44.8);
test("convertToBRL function works", convertToBRL(30), 170.943);
