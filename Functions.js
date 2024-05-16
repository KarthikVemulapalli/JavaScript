/* Resuable Block of Code */

//Declaration 1: Standard function syntax
function addFun1(a, b) {
    return a+b;
}
console.log("Function 1 - "+addFun1(3,4))

//Declaration 2: Anonymous function (function with no name)
const addFun2 = function (a, b) {
    return a+b;
}
console.log("Function 2 - "+addFun2(4,4))

//Declaration 3: Arrow function (function with simplified syntax)
const addFun3 = (a, b) => a+b;
console.log("Function 3 - "+addFun3(4,5))