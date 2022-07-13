// Vehicle
class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

// Car -> Vehicle
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
}

// Motorcycle -> Vehicle
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
}