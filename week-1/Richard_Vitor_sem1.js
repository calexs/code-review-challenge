// (){}[]{]
// ][)({}
// }}(){{
// (){}[]()[]{}[]()
// ()()

const string = "()";
let result = false;
const arr = [];

if (string.length % 2 !== 0 && string !== "") {
    false;
} else {
    for (let i = 0; i < string.length; i += 2) {
        const cut = string.slice(i, i + 2);

        arr.push(cut);

        arr.forEach((item) => {
            const fechamento = item[0] == "(" ? ")" : item[0] == "{" ? "}" : "]"
            result = item[1] == fechamento ? true : false;
        });
    }
}

console.log(result);