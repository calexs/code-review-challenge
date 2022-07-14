const testCases = [
    "III",
    "LVIII",
    "MCMXCIV",
    "IXMM"
]

const singles = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const doubles = {
    I: {
        V: 4,
        X: 9,
    },
    X: {
        L: 40,
        C: 90,
    },
    C: {
        D: 400,
        M: 900
    }
}

const challenge = (input) => {
    const chars = Array.from(input)
    let resultNumber = 0

    let lastValue;

    const updateTotal = (value) => {
        if(value === "Invalid" || lastValue < value) {
            resultNumber = "Invalid"
        } else {
            resultNumber += value
            lastValue = value
        }
    }


    for (let i = 0; i < chars.length; i += 1){
        const char = chars[i]

        const doublesMap = doubles[char]

        if(doublesMap) {
            const nextChar = chars[i+1]
            const doubleValue = doublesMap[nextChar]

            if (doubleValue) {
                i += 1

                updateTotal(doubleValue)

                continue
            }
        }

        const value = singles[char]

        updateTotal(value)

    }

    return resultNumber
}




const results = testCases.map(challenge)

console.log(results)