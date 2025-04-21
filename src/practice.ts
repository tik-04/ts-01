// 1.Type Alias , Interface
type Person = {
    name: string,
    age: number
};

const person1: Person = {name:"tik",age:18}

interface Person2 {
    name: string,
    age: number
}

const person2: Person2 = {name:"tik2",age:20}

console.log(person1,person2)

// 2.Narrowing

function formatInput(arg:string): string;
function formatInput(arg:number): string;
function formatInput(arg:boolean): string;
function formatInput(arg: string | number | boolean): string {
    if (typeof arg === "string") {
        return arg.toUpperCase();
    }
    if (typeof arg === "number") {
        let ans = arg.toString() + " points"
        return ans
    }
    if (typeof arg === "boolean") {
        return arg ? "Yes" : "No";
    }
    throw new Error("Invalid agrument type");
}

// 3. Generic
function flipArray<T>(arr: T[]): T[] {
    let new_arr = []
    for (let i = arr.length - 1; i >= 0; i--){
        new_arr.push(arr[i])
    }
    return new_arr
}

console.log(flipArray([1, 2, 3]))

// 4. Utility
type Profile = {
    name: string;
    email: string;
    age: number;
    phone?: string;
};

type ReadonlyUser = Readonly<Profile>;
type ProfileWithoutAge = Omit<Profile, 'age'>;
type ProfileWithOnlyContact = Pick<Profile, 'email' | 'phone' >;  


//5. class

class Account {
    constructor(public owner:string,public balance:number) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount: number) : void { this.balance += amount }
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount
        }
        throw new Error("You not have enoght money")
    }
    show(): void { console.log(`${this.owner} balance: ${this.balance}`)}
}

class AdminAccount extends Account {
    constructor(owner:string,balance:number,public role:string) {
        super(owner,balance)
    }
    override show(): void {console.log(`${this.owner} balance: ${this.balance} role: ${this.role}`)}

}
  


