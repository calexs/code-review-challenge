const testCases = [
    [[-1,2,1,-4], 1],
    [[0,0,0], 1]
]

const challenge = ([input, target]) => {
    let closestSum, closestComponents;
    let closestDiff = Infinity;

    for (let i = 0; i < input.length - 2; i++){
        for (let j = 1; j < input.length -1; j++) {
            for (var k = 2; k < input.length; k++) {
                if(i < j && j < k) {
                    const components = [input[i], input[j], input[k]]
                    const sum = components.reduce((x, y) => x + y)

                    const difference = Math.abs(target - sum)

                    if (difference < closestDiff) {
                        closestDiff = difference
                        closestSum = sum
                        closestComponents = components
                    }

                }
            }
        }
    }

    return [closestSum, closestComponents, closestDiff]
}

const results = testCases.map(challenge)

console.log(results)