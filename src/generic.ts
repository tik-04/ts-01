//1.1
function wrapInArray11<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray11(5))

//1.2
function merge<T, U>(a: T, b: U): T & U {
    return {...a,...b}
}

console.log(merge({ name: "tik" }, { age: 20 }))

//1.3
function firstElement<T extends any[]>(arr: T): T[0] {
    return arr[0]
}

console.log(firstElement([1,2,3]))

//1.4
function withDefault<T = string>(value?: T): T {
    return value ?? ("default" as T);
}

//1.5

interface Box<T> {
    value: T
    unwrap(): T
}

//bonus 

function isEqual<T>(a: T, b: T): boolean{
    if (a === b) return true
    return false
}

//2.1
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

const user = { id: 1, name: "Tik", active: true }
console.log(pluck(user, ["id", "active"])) // [1, true]

//2.2
type ReadonlyKeys<T> = {
    readonly [K in keyof T]: T[K];
}

type Person = { name: string; age: number }
type Result22 = ReadonlyKeys<Person>
// => { readonly name: string; readonly age: number }

//2.3
type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
}

type Data = { id: number; name: string; active: boolean }
type OnlyBoolean = PickByType<Data, boolean>
// => { active: boolean }

//2.4
function hasKey<T extends object>(obj: T, key: keyof T): boolean {
    return key in obj;
}






