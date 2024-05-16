//reduce() & filter() & map() functions
let SampleArr3 = [1,2,3,4,5]

/*
Add all elements in an Array
Using reduce() function which returns number
*/
const sumfinal = SampleArr3.reduce((sum,num) => sum+num, 0)
//all values iterate through num and perform the initial value of sum is assigned as '0'
console.log("Total - "+sumfinal)

/*
Get all even numbers from the Array
Using filter() function which returns Array
*/
const conditionfinal = SampleArr3.filter(num => num%2==0)
//all values iterate through num and validates the condition
console.log("Condition - "+conditionfinal)

/*
Multiply all Elements in array with 3
Using map() function which returns Array
*/
const modifyfinal = SampleArr3.map(num => num*3)
console.log(modifyfinal)

/*
Sort the String array and Number array using sort() function
*/
//Array contains String i.e. sorts in alphabetical order and Upper to Lower case
var SampleArr1 = ['banana', 'eat', 'apple', 'cat', 'doll', 'Aeroplane']
console.log("SampleArr1 Before Sorted - "+SampleArr1);
console.log("SampleArr1 After Sorted - "+SampleArr1.sort())
//Array contains Number i.e. sorts in ascending order
var SampleArr2 = [3, 1, 2, 7, 1]
console.log("SampleArr2 Before Sorted - "+SampleArr2);
console.log("SampleArr2 After Sorted - "+SampleArr2.sort())
//Array contains String and Number i.e. sort() considers numbers as String and sorts in Number to Alphabetic order
var SampleArr2 = [true, false, 3, 1, 2, 7, 10, 70, 'hello', 'apple', 'Cat', 'Hello', 'Apple']
console.log("SampleArr2 Before Sorted - "+SampleArr2);
console.log("SampleArr2 After Sorted - "+SampleArr2.sort())