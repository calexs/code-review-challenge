const s = "ana",
    t = "naa";

const validAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const arrS = [];
    const arrT = [];

    arrS.push(s.split("").sort().join(""));
    arrT.push(t.split("").sort().join(""));

    for (let i = 0; i < s.length; i++) {
        if (arrS[i] === arrT[i]) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(validAnagram(s, t));
