//const input = "III";
//const input = "LVIII";
const input = "MCMXCIV";
const validPrefixes = {
    "I": ["V", "X"],
    "X": ["L", "C"],
    "C": ["D", "M"]
};

const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function isValidPrefix(letter, lastToken) {
    const validLetters = validPrefixes[lastToken];
    if (validLetters) {
        return validLetters.includes(letter);
    }

    return false;
}

const tokens = [];
const array = input.split("");

array.forEach(letter => {
    let lastToken = null;
    if (tokens.length !== 0) {
        const index = tokens.length - 1;
        lastToken = tokens[index];
    }

    if (lastToken && isValidPrefix(letter, lastToken)) {
        lastToken = lastToken + letter;
        tokens.pop();
        tokens.push(lastToken);

    } else if (lastToken && (letter === lastToken[0])) {
        lastToken = lastToken + letter;
        tokens.pop();
        tokens.push(lastToken);
    } else {
        tokens.push(letter);
    }
});

const value = tokens.reduce((value, token) => {
    let result = 0;

    const firstValue = values[token[0]];
    const secondValue = values[token[1]];
    if (secondValue && (firstValue < secondValue)) {
        result -= firstValue;
        token = token.substring(1);
    }

    const letters = token.split("");
    result = letters.reduce((letterValue, letter) => {
        letterValue += values[letter];
        return letterValue;
    }, result);

    return value + result;
}, 0);

console.log(value);
