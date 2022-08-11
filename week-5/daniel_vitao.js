const digits = [[1,2,3], [4,3,2,1], [9]];

const getArray = (sArr) => {
    const arrInteger = Number(sArr.join("")) + 1;    

    const arrOutPut = arrInteger.toString().split("");

    return arrOutPut;
};

digits.forEach((item) => {
    console.log(getArray(item));
});