const s = "ana",
    t = "nan";

const validAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const textS = s.split("").sort().join("");
    const textT = t.split("").sort().join("");

    if (textS === textT) return true;
    else return false;
};

console.log(validAnagram(s, t));
