// lv.1

//1.1
class Vehicle11 {
    constructor(public brand:string,public speed:number) {}
    move() : void {console.log(`${this.brand} is moving at ${this.speed}`)}
}
//1.2
class Car11 extends Vehicle11 {
    drift() : void {console.log(`${this.brand} is drifting sideways!`)}
}

//lv.2

//2.1
class Vehicle21 {
    private engineStatus: boolean = false;

    constructor(public brand:string,public speed:number) {}

    move() : void {console.log(`${this.brand} is moving at ${this.speed}`)}
    startEngine() : void {this.engineStatus = true}
    stopEngine() : void {this.engineStatus = false}
    status(): void {
        console.log(`Engine status: ${this.engineStatus ? "ON" : "OFF"}`);
    }
      
}

class Car21 extends Vehicle21 {
    drift() : void {console.log(`${this.brand} is drifting sideways!`)}
}

//2.2
class ElectricCar extends Car21 {
    override startEngine() : void {console.log("Starting electric engine...")}
}

//lv.3

//3.1 
abstract class Robot {
    abstract doTask(): void;

    statusReport(): void { console.log("Status OK. Awaiting Task...")}
}

class CleaningRobot extends Robot {
    override doTask() : void { console.log("Vacuuming the floor and cleaning windows.")}
}

class SecurityRobot extends Robot {
    override doTask() : void {console.log("Scanning for intruders and securing the area.")}
}

//3.2
class Inventory<T> {
    constructor(public value:T[] = []) {}
    add(item:T):void {this.value.push(item)}
    getAll(): T[] {return this.value}
}

//boss challenge

abstract class Pet {
    constructor(public name:string,public level:number,public hp:number,public status:string) {}
    abstract useSkill(target: Pet):void
}
 
class Dragon extends Pet {
    constructor(name:string,level:number,hp:number,status:string) {
        super(name, level, hp, status)
    }
    useSkill(target: Pet): void {
        console.log(`${this.name}(Dragon) use fire to ${target.name}`)
    }
}

class Cat extends Pet {
    constructor(name:string,level:number,hp:number,status:string) {
        super(name, level, hp, status)
    }
    useSkill(target: Pet): void {
        console.log(`${this.name}(Cat) use Meow to ${target.name}`)
    }
}

class Slime extends Pet {
    constructor(name:string,level:number,hp:number,status:string) {
        super(name, level, hp, status)
    }
    useSkill(target: Pet): void {
        console.log(`${this.name}(Slime) use takle to ${target.name}`)
    }
}

class Item<T> {
    constructor(
        public name: string, 
        public effect: (target: Pet,value:T) => void,
        public value: T 
    ) {}

    use(target: Pet): void {
      // ทำบางอย่างกับ target โดยใช้ effect
        this.effect(target, this.value)
    }
}
