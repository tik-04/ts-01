//1.Generic

//1.1

function wrapInArray<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray(5))

//1.2
function mergeObjects<T, U>(obj1:T,obj2:U): T & U {
    return {...obj1,...obj2}
}   

//2. OOP & Class

//2.1

// Vehicle + Car

class Vehicle {
    constructor(public brand:string, public speed:number) {
        this.brand = brand
        this.speed = speed
    }
    move() : void { console.log(`${this.brand} is moving at ${this.speed} km/h`)}
}

class Car extends Vehicle {
    constructor(brand:string,speed:number,public wheels:number) {
        super(brand,speed)
    }
    override move() { console.log(`${this.brand} is moving at ${this.speed} km/h with ${this.wheels} wheels`)}
}

//2.2 Shape + Rectangle + Circle
abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(public width:number,public height:number) {
        super()
        this.width = width
        this.height = height
    }
    area(): number {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(public radius:number) {
        super()
        this.radius = radius
    }
    area(): number {
        return (Math.PI * this.radius * this.radius)
    }
}

const r = new Rectangle(5, 10);
console.log(r.area()); // 50

const c = new Circle(7);
console.log(c.area()); // ~153.93


//3.

//3.1
type MakeOptional<T> = {
    [key in keyof T]?: T[key]
}

type A = MakeOptional<{name: string; age: number}>
