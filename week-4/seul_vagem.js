const testCases = [
    ["anagram", "nagaram"],
    ["rat", "cat"]
]


const toArray = (x) => [...x]

const toCharMap = (str) => {
    var chars = toArray(str)

    return chars.reduce((charMap, char) => {

        return charMap.set(char, (charMap.get(char) || 0) + 1)
    
    }, new Map())
}


const compareMaps = (m1, m2) => {
    const m1Entries = toArray(m1.entries())
    const m2Length = toArray(m2.keys()).length

    return (m1Entries.length == m2Length) && 
             (m1Entries.every(([key, value]) => m2.get(key) === value))
}

const challenge = ([s, t]) => {
    return compareMaps(toCharMap(s), toCharMap(t))
}


const results = testCases.map(challenge)

console.log(results)