const addOneDigit = (input) => {
  const inputNumber = Number(input.join(''));

  const summedInputNumber = inputNumber + 1;

  const summedInputArr = Array.from(String(summedInputNumber));

  return summedInputArr;
}

console.log(addOneDigit([1,2,3]));
console.log(addOneDigit([4,3,2,1]));
console.log(addOneDigit([9]));