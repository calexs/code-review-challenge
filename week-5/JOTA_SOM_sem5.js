const input = [4, 3, 2, 1];
const inputString = input.join("");
let number = BigInt(inputString); // FIZ ERRADO E TIVE QUE CORRIGIR //let number = Number(inputString);
number++;

const outputString = number.toString();
const output = outputString.split("");
console.log(output);
