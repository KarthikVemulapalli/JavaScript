class Person {
    name = 'Hello';
    age = 20;
    /*
    we can also define properties another way using get() methods
    The below representation is not a method, get keyword indicates it is a property.
    */
    get height() {
        return 160
    }

}

//create object of the class
let personObj1 = new Person()
console.log("DC Name - "+personObj1.name)
console.log("DC Age - "+personObj1.age)
console.log("DC Height - "+personObj1.height)       //need not mention '()' because get keyword indicates it is a property.