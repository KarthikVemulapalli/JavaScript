
console.log("******************** JavaScript Arrays ********************");
//Initializing Array
var ArraySample = Array(3)      //Only length is defined for this array. 3 empty elements inside this array.

let SampleArr1 = new Array(1,2,3,"Hello",5,6,1)
let SampleArr2 = ["Hi", "Hello", "The", "Array", "String", 1]

console.log("SampleArr1 - "+SampleArr1);
console.log("SampleArr1 - "+SampleArr2);

console.log("SampleArr1 length - "+SampleArr1.length);
console.log("3rd Index Value of SampleArr2 - "+SampleArr1[3]);
console.log("5th Index Value of SampleArr2 - "+SampleArr2[5]);

//ReAssign Value
console.log("1st Index Value before ReAssigned Value in SampleArr1 - "+SampleArr1[1]);
SampleArr1[1] = "New"
console.log("1st Index Value after ReAssigned Value in SampleArr1 - "+SampleArr1[1]);

//Add element at last
SampleArr2.push("NewElement")
SampleArr2.push(100)
console.log("push() SampleArr2 - "+SampleArr2);

//Remove last element
SampleArr2.pop()
console.log("pop() SampleArr2 - "+SampleArr2);

//Add element at first
SampleArr1.unshift("First")
console.log("unshift() SampleArr1 - "+SampleArr1);

//Return the index of element on first occurence in Array
console.log(SampleArr1.indexOf(5))
console.log("indexOf() SampleArr1 - "+SampleArr1.indexOf("End"))      //If element is not present it returns '-1' value

//Returns the index of element on last occurence
console.log("lastIndexOf() SampleArr1 - "+SampleArr1.lastIndexOf(1))      //returns last index of element, if not present returns '-1'

//Find if the element is present in the Array
console.log("includes() SampleArr1 - "+SampleArr1.includes(5))         //returns true or false 

//reverse the array
console.log("reverse() SampleArr1 - "+SampleArr1.reverse())
//reverse() changes the original array

//break the array
var sliceArray = SampleArr1.slice(2, 4)
console.log("slice() SampleArr1 - "+sliceArray)         //2nd Index number to (4-1)th index number is retrieved
//slice() will not change the original array