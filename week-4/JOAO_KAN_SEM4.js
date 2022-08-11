function verify(word, anagram) {
  if (word.length !== anagram.length) return false;

  const aInp1 = word.split("");
  const aInp2 = anagram.split("");

  aInp1.forEach((e) => {
    const index = aInp2.indexOf(e);
    if (index !== -1) {
      aInp2.splice(index, 1);
    }
  });

  return aInp2.length === 0 ? true : false;
}

console.log(verify("anagram", "anagram"));
console.log(verify("dududu", "uuuddd"));
console.log(verify("cat", "cet"));
