const rules = [
    (input) => input.length >= 1 && input.length <= 100,
    (input) => input[0] != 0,
    (input) => input.some(value => value >= 0 && value <= 9)
]

const validateInput = (input) => {
    return rules.every(func => func(input))
};

const checkTwoDigits = (integer) => {
    return integer.toString().length === 2;
};

const handleInputEnd9 = (input) => {
    const { array } = input.reduceRight(({ array, leftingNumber }, digit, currentIndex, initialArray) => {
        let currentDigit = currentIndex === initialArray.length - 1 ? digit + 1 : digit;

        if (leftingNumber) {
            currentDigit += leftingNumber;
        };

        if (!checkTwoDigits(currentDigit)) {
            array.unshift(currentDigit);
            leftingNumber = 0;
        } else {
            const stringedDigit = currentDigit.toString();
            leftingNumber = Number(stringedDigit[0]);
            if (currentIndex === 0) {
                array.unshift(leftingNumber, Number(stringedDigit[1]));
            } else {
                array.unshift(Number(stringedDigit[1]));
            };
        };

        return { array, leftingNumber };
    }, { array: [], leftingNumber: 0 });

    return array;
};

const getResult = (input) => {
    if (!validateInput(input)) {
        return "Invalid Input";
    };

    const lastDigit = input[input.length - 1];

    let finalArray = input;

    if (lastDigit != 9) {
        const newLastDigit = lastDigit + 1;

        finalArray[finalArray.length - 1] = newLastDigit;
    } else {
        finalArray = handleInputEnd9(input);
    };

    return finalArray;
};

const inputs = [
    [1, 2, 4],
    [4, 3, 2, 1],
    [9],
    Array(100).fill(9),
    Array(100).fill(4),
    ["a"],
    [0, 2],
    [10]
];

inputs.forEach(input => {
    console.log(getResult(input))
});