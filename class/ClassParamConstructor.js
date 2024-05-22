class Person {
    firstname;
    lastname;
    age = 25;
    /*
    we can also define properties another way using get() methods
    The below representation is not a method, get keyword indicates it is a property.
    */
    get height() {
        return 160
    }

    constructor (fname, lname) {
        this.firstname = fname
        this.lastname = lname
    }

    /*
        Instance Property: The value depends on during object creation.
            Example: firstname, lastname propertis of class Person
        Class Property: Value is already defined inside class and doesn't depend on object creation, same for all objects.
            Example: age, height propertis of class Person
    */

    //method
    fullname(){
        return this.firstname+this.lastname
    }
}

//create object of the class using parameterized constructor without values
let personObj1 = new Person()
//Even though no parameters passed in parameterized constructor, by default the values will be passed as 'udefined'
console.log("FirstName1 - "+personObj1.firstname)
console.log("LastName1 - "+personObj1.lastname)
console.log("FullName1 - "+personObj1.fullname())
console.log("Age1 - "+personObj1.age)
console.log("Height1 - "+personObj1.height)       //need not mention '()' because get keyword indicates it is a property.

//create object of the class using parameterized constructor with values
let personObj2 = new Person("Tim", "Tom")
console.log("FirstName2 - "+personObj2.firstname)
console.log("LastName2 - "+personObj2.lastname)
console.log("FullName2 - "+personObj2.fullname())
console.log("Age2 - "+personObj2.age)
console.log("Height2 - "+personObj2.height)