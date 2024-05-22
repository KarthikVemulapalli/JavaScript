module.exports = class Car {

    colour;

    constructor(col){
        this.colour = col
    }

    get colour(){
        return colour;
    }

    get topSpeed(){
        return 320;
    }

    price(){
        if(this.colour=='Red') {
            return 48000;
        } else if (this.colour=='White') {
            return 45000;
        } else {
            return 40000;
        }
    }

}