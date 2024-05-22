/* Bunch of Characters */

let StrVar = 'Hello Goodday'
console.log("Length - "+StrVar.length)

//SubString
console.log("SubString - "+StrVar.slice(0,4))

//Character
console.log("Character - "+StrVar[2])

//Split String
let splitStr = StrVar.split(" ");
console.log("Split with Space - "+splitStr[0] +" & "+splitStr[1])

//Convert String to Number
let numStr1 = '25'
let numStr2 = '15'
console.log("Number Output - "+ (parseInt(numStr1) - parseInt(numStr2)) )

//while concating the values like boolean or null to String. The values are also considered as String.
let boolVar = true
let nullVar = null
console.log("Concat String - "+ numStr1 + boolVar + nullVar)

//indexOf() method
console.log('Index of O - '+StrVar.indexOf('o'))
console.log('Index of O after 4th Index - '+StrVar.indexOf('o', 5))


//Comparing Strings
console.log(12=='12')        //Loose Equality - This will return true.
console.log(12==='12')       //Strict Equality - This will return false.

console.log('Hello'=='hello')                                   //returns false because string comparison is case sensitive
console.log('Hello'.toLowerCase()=='hello'.toLowerCase())       //returns true because string comparison is case sensitive