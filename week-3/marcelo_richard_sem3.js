// const arr = [-1, 2, 1, -4];
// const target = 1;

// const getClosestSum = (arr, target) => {
//     let closestSum = 0;
//     let closestDiff = undefined;

//     for (let i = 0; i < arr.length - 2; i++) {
//         const currentNumber = arr[i];
//         const nextNumber = arr[i + 1];
//         const nextNextNumber = arr[i + 2];

//         const currentSum = currentNumber + nextNumber + nextNextNumber;

//         const currentDiff = target - currentSum;

//         if (closestDiff === undefined || closestDiff > currentDiff) {
//             closestSum = currentSum;
//             closestDiff = currentDiff;
//         }
//     };

//     return closestSum;
// };

// console.log(getClosestSum(arr, target));

