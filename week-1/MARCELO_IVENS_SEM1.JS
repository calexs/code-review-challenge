const input = "()[}"

const openCloseMap = {
    "(": ")",
    "[": "]",
    "{": "}"
};

let isValid = true;

for (let i = 0; i < input.length; i += 2) {
    const currentChar = input[i];
    const respectiveClosingchar = openCloseMap[currentChar];

    if (input[i+1] != respectiveClosingchar) {
        isValid = false;
        break;
    }
};

console.log(isValid);