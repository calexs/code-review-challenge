const algsToNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const convertAlgsToNumber = (input) => {
  const inputArr = Array.from(input);

  const firstAlg = inputArr[0];
  const lastAlg = inputArr[-1];

  if(firstAlg && lastAlg && algsToNumbers[firstAlg] < algsToNumbers[lastAlg]) {
    return 'Algarismo inválido.';
  }

  let total = 0;

  for(let i=inputArr.length - 1; i>=0; i=i-2) {
    const algOne = algsToNumbers[inputArr[i-1]];
    const algTwo = algsToNumbers[inputArr[i]];

    if (!algTwo) {
      total += algOne;
    } else {
      if(algTwo > algOne) {
        total += algTwo - algOne;
      } else {
        total += algOne + algTwo;
      }
    }
  }

  return total;
}

console.log(convertAlgsToNumber('XIX'));