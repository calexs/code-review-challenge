function verify(char) {
  const charSplit = char.split("");

  const result = [];

  charSplit.forEach((element, index, arr) => {
    if (element === "[") {
      arr[index + 1] === "]" ? result.push(true) : result.push(false);
    }

    if (element === "{") {
      arr[index + 1] === "}" ? result.push(true) : result.push(false);
    }

    if (element === "(") {
      arr[index + 1] === ")" ? result.push(true) : result.push(false);
    }
  });

  return result.every((element) => element === true);
}

console.log(verify("(){}[]{]")); // false
console.log(verify("][)({}")); // false
console.log(verify("}}(){{")); // false
console.log(verify("(){}[]()[]{}[]()")); // true
console.log(verify("()()")); // true
