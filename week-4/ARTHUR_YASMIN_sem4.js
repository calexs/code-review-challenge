const inputs = [
  {
    s: 'anagram',
    t: 'nagaram'
  },
  {
    s: 'rat',
    t: 'cat'
  },
  {
    s: 'amor',
    t: 'roma'
  },
  {
    s: 'topo',
    t: 'copo'
  },
  {
    s: 'topod',
    t: 'copo'
  }
]

const isValidAnagram = (input) => {
  let isValid = true;

  const { s, t } = input

  let sParts = s.split('')
  let tParts = t.split('')

  if(sParts.length !== tParts.length) {
    console.warn('The length is not the same')
    return;
  }

  for(let currentIndex = 0; currentIndex < sParts.length; currentIndex++) {
    const sLetter = sParts[currentIndex]

    const foundIndex = tParts.findIndex((tLetter) => sLetter === tLetter)

    tParts = tParts.filter((_, index) => index !== foundIndex);
    sParts = sParts.filter((_, index) => index !== currentIndex);

    if(foundIndex < 0) {
      isValid = false;
      break;
    }
  }

  return isValid
}

inputs.forEach(input => {
  const { s, t } = input

  const isValid = isValidAnagram(input)

  if(typeof isValid === 'undefined') {
    return
  }

  console.log(`Entrada: s = ${s}, t = ${t}`)
  console.log(`Saída: ${isValid}`)
})