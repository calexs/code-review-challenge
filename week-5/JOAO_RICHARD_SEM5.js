/* Explanation: O vetor representa o inteiro 123.
Incrementando em um, 123 + 1 = 124.
Portanto, o resultado deveria ser [1,2,4]. */

function increment(aNum) {
  const incrementLastNumber = aNum.map((number, index, array) => {
    if (index === array.length - 1) {
      return number + 1;
    }
    return number;
  });

  const separateDigits = incrementLastNumber.map((num) => {
    if (num > 9) {
      const splitter = String(num).split("");

      return splitter;
    }
    return num;
  });

  const regexClearNoNumbers = /,/g;
  const parseInt = Number(
    separateDigits.toString().replace(regexClearNoNumbers, "")
  );

  return parseInt;
}

console.log(increment([1, 2, 3]));
console.log(increment([9]));
console.log(increment([4, 3, 2, 1]));
