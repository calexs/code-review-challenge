const getNumbers = (numbers, target) => {
  const obj = {};
  numbers.forEach((number) => {
    obj[number] = number - target;
  });

  // Sort array descending 
  let sortable = [];
  for (const diff in obj) {
    sortable.push([diff, obj[diff]]);
  }
  
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  const threeIntegers = [
    Number(sortable[0][0]),
    Number(sortable[1][0]), 
    Number(sortable[2][0])
  ];

  const sumThreeIntegers = threeIntegers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return sumThreeIntegers;
}

console.log(getNumbers([-1,2,1,-4], 1));
console.log(getNumbers([-2,10,5,-8], 3));
console.log(getNumbers([5,13,14,-2], 6));