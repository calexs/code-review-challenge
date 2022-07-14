function sum(sRoman) {
  const isValid = sRoman.match(
    /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );

  if (!isValid) {
    return "Invalid Roman Numeral";
  }

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prev = 0;
  for (let i = sRoman.length - 1; i >= 0; i--) {
    const curr = roman[sRoman[i]];
    if (curr < prev) {
      sum -= curr;
    } else {
      sum += curr;
    }
    prev = curr;
  }

  return sum;
}

console.log(sum("MCMXCIV")); // 1994