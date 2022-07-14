const romanTranslations = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const validRomanNumbersExceptions = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"]
};

const mustSubtract = (firstChar, secondChar) => {
    const exceptions = validRomanNumbersExceptions[firstChar];

    return exceptions && exceptions.includes(secondChar);
};

const checkRomanNumber = (romanNumber) => {
    let finalValue = 0;
    let currentRomanNumberIndex = 0;

    while (currentRomanNumberIndex < romanNumber.length) {
        const currentRomanNumber = romanNumber[currentRomanNumberIndex];
        const nextRomanNumber = romanNumber[currentRomanNumberIndex + 1];        

        if (nextRomanNumber && mustSubtract(currentRomanNumber, nextRomanNumber)) {
            finalValue += (romanTranslations[nextRomanNumber] - romanTranslations[currentRomanNumber]);
            currentRomanNumberIndex += 2;
        } else {
            finalValue += romanTranslations[currentRomanNumber];
            currentRomanNumberIndex += 1;
        }
    };

    return finalValue;
};

console.log(checkRomanNumber("LVIII"));
console.log(checkRomanNumber("III"));
console.log(checkRomanNumber("MCMXCIV"));
