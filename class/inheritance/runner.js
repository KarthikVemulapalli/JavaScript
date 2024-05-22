const Dog = require("./ChildClass");
const LivingBeing = require("./ParentClass")

//ChildClass Object
let dog1 = new Dog('Big', 'Dog')
console.log('CC Location - '+dog1.location)
console.log('CC Creature - '+dog1.creature())
console.log('CC Fullname - '+dog1.fullname())       //function from ParentClass

//ParentClass Object
let lbeing1 = new LivingBeing('John', 'Rode')
console.log('PC Location - '+lbeing1.location)
console.log('PC Creature - '+lbeing1.creature())
console.log('PC Fullname - '+lbeing1.fullname())