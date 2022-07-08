const checkPairs = (str) => {
	const result = str
		 .replaceAll('()', '')
		 .replaceAll('[]', '')
		 .replaceAll('{}', '')

	return !Boolean(result)
}

console.log(checkPairs('(){}[]{]'))
console.log(checkPairs('][)({}'))
console.log(checkPairs('}}(){{'))
console.log(checkPairs('(){}[]()[]{}[]()'))
console.log(checkPairs('()()'))
