function add(sumandoUno, sumandoDos) {
  return (sumandoUno+sumandoDos);
}

function multiply(operandoUno, operandoDos) {
    return (operandoUno*operandoDos);
}

function format(divisa) {
    return (`£${divisa}`);

}

const startingValue = 2

let badCode = format(multiply((add(startingValue, 10)),2));
let goodCode = format(multiply((add(startingValue, 10)),2));

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your code returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test('add function - case 1 works', add(1, 3), 4)
test('add function - case 2 works', add(2.4, 5), 7.4)
test('multiply function works', multiply(2, 3), 6)
test('format function works', format(16), "£16")
test('badCode variable correctly assigned', badCode, "£24")
test('goodCode variable correctly assigned', goodCode, "£24")
