//class
class Car {
    constructor(name, color, speed){
        this.name = name
        this.color = color
        this.speed = speed
    }
}
//object
const car1 = new Car('camry', 'black', 40)

console.log(car1);

class Animal{ //super class
    constructor(name , color){
        this.name = name
        this.color = color
    }
}

class Cat extends Animal{ //sub class

}