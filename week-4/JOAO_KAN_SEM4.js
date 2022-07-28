
const anagram = "dog"
const verification = "dag"



if(anagram.length === verification.length) {
  const aAnagram = anagram.split('')
  const aVerification = verification.split('')

  aAnagram.forEach(e => {
    const index = aVerification.indexOf(e)

    // // if(index === -1) {
    // //   break
    // // }

    aVerification.splice((aVerification.indexOf(e) - 1), 1)
  })

  console.log(aVerification)

  console.log(aVerification.length === 0 ? true : false)
} else {
  console.log(false);
}

