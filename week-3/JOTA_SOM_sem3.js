"use strict";
//const input = [0, 0, 0];
//const target = 1;
const input = [-1, 2, 1, -4];
const target = 1;
//const input = [5, -5, 0, 1, 1, 1];
//const target = 0;
//const input = [-1, 2, 4, -4];
//const target = 1;
//const input = [5, 13, 14, -2];
//const target = 6;
//const input = [0, 5, 6, 0];
//const target = 0;

let start = "111";
let max = "";

start = start.padEnd(input.length, "0");
max = max.padEnd(input.length, "1");

let tests = [];
let test = start;

do {
    const matches = test.match(/1/g);
    if (matches && (matches.length === 3)) {
        tests.push(test);
    }

    let number = parseInt(test, 2);
    const maxNumber = parseInt(max, 2);

    number++;

    if (number > maxNumber) {
        number = 0;
    }

    const next = number.toString(2);
    test = next.padStart(input.length, "0");
} while (start !== test);

const sums = tests.map(test => {
    const sum = input.reduce((sum, value, index) => {
        if (test[index] === "1") {
            sum += value;
        }

        return sum;
    }, 0);

    return sum;
});

const lowest = sums.reduce((lowest, value) => {
    const diffLowest = Math.abs(lowest - target);
    const diffValue = Math.abs(value - target);

    if (diffLowest < diffValue) {
        return lowest;
    } else {
        return value;
    }
});

console.log(lowest);