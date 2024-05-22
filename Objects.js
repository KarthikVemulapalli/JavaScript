/* 
Object is a collection of Properties 
Properties in object to be defined in Key-Value pairs
Key can be initialized multiple times in an object. Property with latest value will be saved.
*/

let Person = {
    FirstName: "Tim",
    MiddleName: "T",
    LastName: "David",
    FirstName: 10
}
console.log("LasstName - "+Person.LastName)
console.log("FirstName - "+Person.FirstName)
console.log("MiddleName - "+Person['MiddleName'])

//ReAssign value of property
Person.FirstName = "Kane"
console.log("FirstName - "+Person.FirstName)

//Add new property in the object
Person.Gender = "Male"
console.log(Person)

//Delete the property from the object
delete Person.MiddleName
console.log(Person)

//Check if property is present in Object or not
let validate = 'MiddleName' in Person
console.log('Validate Property - '+ validate)

//Get all values in Object
for (let key in Person){
    console.log('Value - '+Person[key])
}

//Property can hold function()
let Car = {
    Name: "GT",
    Company: "Lamborghini",
    Model: function() {
        return this.Company + this.Name     //'this' keyword can be used to get property of same object
    }
}
console.log("Property Function - "+Car.Model())


/*
we can also define properties another way using get() methods
The below representation is not a function, get keyword indicates it is a property.
*/
let Wall = {
    get Height() {
        return 180
    }
}
console.log("Height - "+Wall.Height)