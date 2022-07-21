const input = [-1, 2, 1, -4];

const target = 1;

const findCloseValue = (target, input) => {
  let somes = [];

  let counter = 1;

  for (let currentIndex = 0; currentIndex < input.length; currentIndex++) {
    if (counter == 3) {
      console.log(input.slice(currentIndex - 1, currentIndex));
      const some = input
        .slice(currentIndex - 2, currentIndex)
        .reduce((prev, cur) => prev + cur, 0);

      somes.push(some);
    }

    counter++;
  }

  return somes;
};

console.log(findCloseValue(target, input));