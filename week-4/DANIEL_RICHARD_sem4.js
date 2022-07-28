const anagramCheck = (string1, string2) => {
  if (string1.length !== string2.length) return false

  const checkString1 = string1.split('').sort().join(''); 
  const checkString2 = string2.split('').sort().join('');

  const result = (checkString1 === checkString2);

  return result;
}

console.log(anagramCheck('abcd','dcba'))

