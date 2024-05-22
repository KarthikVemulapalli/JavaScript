const LivingBeing = require("./ParentClass")

module.exports = class Dog extends LivingBeing {

    //Mandatory to create a constructor same as ParentClass constructor
    constructor(fname, lname){
        //mandatory to call ParentClass constructor on the firststep
        super(fname, lname)
    }

    //Overridden property of ParentClass
    get location(){
        return 'BlueCross'
    }
    //Overridden method of ParentClass
    creature(){
        return 'Animal'
    }

}