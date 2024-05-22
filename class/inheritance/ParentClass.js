module.exports = class LivingBeing {

    firstname;
    lastname;

    constructor(fname, lname) {
        this.firstname = fname
        this.lastname = lname
    }

    get location() {
        return 'Earth'
    }

    creature(){
        return 'HumanBeing'
    }

    fullname(){
        return this.firstname+this.lastname;
    }

}