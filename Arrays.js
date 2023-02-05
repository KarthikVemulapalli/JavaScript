
console.log("******************** JavaScript Arrays ********************");
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
console.log("SampleArr2 - "+SampleArr2);

//Remove last element
SampleArr2.pop()
console.log("SampleArr2 - "+SampleArr2);

//Add element at first
SampleArr1.unshift("First")
console.log("SampleArr1 - "+SampleArr1);

//Return the position of element in Array
console.log(SampleArr1.indexOf(5))
console.log(SampleArr1.indexOf("End"))   //If element is not present it returns '-1' value

//Returns the last index of element
console.log(SampleArr1.lastIndexOf(1))    //returns last index of element, if not present returns '-1'

//reverse the array
console.log(SampleArr1.reverse())
//reverse changes the original array

//breaks the array
console.log(SampleArr1.slice(2, 4))         //2nd Index number to (4-1)th index number is retrieved
//slice will not change the original array


//reduce() & filter() & map() functions
let SampleArr3 = [1,2,3,4,5]

//Accumulate - Add elements in an array using inbuilt function reduce()
const sumfinal = SampleArr3.reduce((sum,num) => sum+num, 0)
//all values are iterate in num and initial value of sum is 0
console.log("Total - "+sumfinal)

//Condition - Get all even numbers using inbuilt function filter()
const conditionfinal = SampleArr3.filter(num => num%2==0)
//all values are iterate in num
console.log("Condition - "+conditionfinal)

//Modify All Elements using inbuilt function map()
const modifyfinal = SampleArr3.map(num => num*3)
console.log(modifyfinal)


//sort() function
console.log("SampleArr1 Before Sorted - "+SampleArr1);
console.log("SampleArr1 After Sorted - "+SampleArr1.sort())         //sort() changes the original array
