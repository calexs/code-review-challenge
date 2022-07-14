const mpdObj = [
  {
    romano: "I",
    cardinal: 1,
    idx: 0,
  },
  {
    romano: "V",
    cardinal: 5,
    idx: 1,
  },
  {
    romano: "X",
    cardinal: 10,
    idx: 2,
  },
  {
    romano: "L",
    cardinal: 50,
    idx: 3,
  },
  {
    romano: "C",
    cardinal: 100,
    idx: 4,
  },
  {
    romano: "D",
    cardinal: 500,
    idx: 5,
  },
  {
    romano: "M",
    cardinal: 1000,
    idx: 6,
  },
];
const ipt = "XVI";
const obj = {
  acc: 0,
};
const setAcc = (number) => {
  obj.acc += number;
};
const getCardinalNumber = (numberRoman) => {
  return mpdObj.find((obj) => obj.romano === numberRoman).cardinal;
};

const validateString = () => {
  const aIpt = Array.from(ipt);
  const fNumber = getCardinalNumber(aIpt[0]);
  return aIpt.reduce((acc, numberRoman) => {
    const number = getCardinalNumber(numberRoman);
    if (acc >= number) {
      acc = number;
      setAcc(number);
    } else {
      acc = false;
    }

    return acc;
  }, fNumber);
};

const searchValueRoman = (ipt) => {
  if (!validateString()) {
    return "Deu ruim ai na string ai fio";
  }
  return obj.acc;
};
console.log(searchValueRoman(ipt));
