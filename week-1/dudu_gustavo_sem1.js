const getValidKeyValue = (keyValue) => {
  const splittedArray = keyValue.split('');

  const validEqualsKeys = (key) => {
    switch (key) {
      case '(':
        return ')';
      case '{':
        return '}';
      case '[':
        return ']';
      default:
        break;
    }
  }

  if (splittedArray[0] === ')' || splittedArray[0] === ']' || splittedArray[0] === '}') {
    return false;
  }

  const outputResultsplittedArray = splittedArray.map(() => {
    const closedKeyPair = validEqualsKeys(splittedArray[0]);

    if (splittedArray[1] === closedKeyPair) {
      splittedArray.splice(0, 2);
      return true;
    } else {
      splittedArray.splice(0, 2);
      return false;
    }
  });

  if (outputResultsplittedArray.includes(false)) {
    return false;
  }

  return true;
};

console.log(getValidKeyValue('(){}[]{]'))
console.log(getValidKeyValue('][)({}'))
console.log(getValidKeyValue('}}(){{'))
console.log(getValidKeyValue('(){}[]()[]{}[]()'))
console.log(getValidKeyValue('()()'))
