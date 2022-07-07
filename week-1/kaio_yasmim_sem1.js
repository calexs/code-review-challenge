const string = "()";

const aString = Array.from(string);


const verifyLetters = (string)=>(
    Array.from(string).reduce((acc,letter,idc)=>{
        var letter = aString[idc]
        var letterAfter =     aString[idc+1]
        console.log(aString[idc] !== undefined)
        if(idc !== undefined){ 
        switch(letter){
            case '(':
                acc = letterAfter == ')'?true:false
                break
            case '{':
                acc = letterAfter == '}'?true:false
                break
            case '[':
                acc = letterAfter == ']'?true:false
                break
        }}    
        return acc
    },true)
)
const isPar = (string)=>{
    return string/2 == 0?true:false
}

const verifyString = ()=>{
    
}