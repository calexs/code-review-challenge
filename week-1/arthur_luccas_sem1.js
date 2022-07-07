const result = !'()[][]{}(){}[]'
	.replace(/\(\)/g, '')
	.replace(/\[\]/g, '')
	.replace(/\{\}/g, '')

console.log(result)
