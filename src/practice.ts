// 1.
// function identity<T>(arg: T): T {
//     return arg;
// }
  
// console.log(identity<string>("tik"))
// console.log(identity<number>(99))

// 2.
// function swap<T, U>(a: [T, U]): [U, T] {
//     return [a[1],a[0]]
// }
console.log("test")
// 3.

// function logArray<T>(arr: T[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// 4.
// function fetchProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }

// const profile = { name: "tik", age: 20 };
// console.log(fetchProp(profile,"name"))

// 5.
// function doubleLength<T extends { length: number }>(val: T): number {
//     return val.length ** 2
// }