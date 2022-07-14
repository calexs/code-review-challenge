const inputs = ["III","LVIII","MCMXCIV"]

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}


function getResult(input) {
    const numbersToSome = []
    const splittedInput = input.split("");

    splittedInput.forEach((item) => {
        const value = roman[item]

        numbersToSome.push(value);
    })

    const some = numbersToSome.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    return some;
}

inputs.forEach(input => {
  const result = getResult(input)
  console.log('')
  console.log(`Input: s = "${input}"`)
  console.log(`Output: ${result}`)
  console.log(`Explanation: ${input} = ${result}.`)
  console.log('')
})