/* Explanation: O vetor representa o inteiro 123.
Incrementando em um, 123 + 1 = 124.
Portanto, o resultado deveria ser [1,2,4]. */

function increment(aNum) {
  const incrementLastNumber = aNum.map((x, i, a) => {
    if (i === a.length - 1) {
      return x + 1;
    }
    return x;
  });

  const separateDigits = incrementLastNumber.map((x, i, a) => {
    if (x > 9) {
      const splitter = String(x).split("");

      return splitter;
    }
    return x;
  });

  const parseInt = Number(separateDigits.toString().replace(/,/g, ""));

  return parseInt;
}

console.log(increment([1, 2, 3]));
console.log(increment([9]));
console.log(increment([4, 3, 2, 1]));
