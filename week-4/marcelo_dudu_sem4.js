const orderStr = (str) => {
    return str.split("").sort().join("");
};

const checkAnagram = (str1, str2) => {
    const orderdStr1 = orderStr(str1);
    const orderdStr2 = orderStr(str2);

    return orderdStr1 === orderdStr2;
};

console.log(checkAnagram("anagram", "nagaram"));

console.log(checkAnagram("cat", "rat"));