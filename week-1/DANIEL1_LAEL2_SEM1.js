const s = "[[[]{}"

const validateString = () => {
  let openKey = "";
  let closeKey = "";

  Array.from(s).forEach(c => {
    if(c !== closeKey) {
      closeKey = getCloseKey(c);
      console.log(c, closeKey)
      openKey = c;

      if(!closeKey) return false;
    }
  })

  return true;
}

const getCloseKey = ( char ) => {
  switch  ( char ) {
    case "{" : return "}";
    case "(" : return ")";
    case "[" : return "]";
    default : return false;
  }
}

console.log(validateString())