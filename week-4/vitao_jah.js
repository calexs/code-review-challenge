const s = "cat",
    t = "tac";

const validAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    for (let i in s) {
        if (!s.includes(t[i])) return false;
        else return true;
    }
};

console.log(validAnagram(s, t));
