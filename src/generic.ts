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


