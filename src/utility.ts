// Partial
//1.
type Product11 = { name: string; price: number; stock: number }
type ProductUpdate = Partial<Product11>

//2.
function updateProduct(product: Product11, update: Partial<Product11>): Product11 {
    return {...product,...update}
}

type Profile12 = {
    id: string;
    username: string;
    avatarUrl: string;
}

//3.
type EditableProfile = { id: string } & Partial<Omit<Profile12, "id">>

//Required + Readonly

//2.1

type User = {
    name?: string;
    email?: string;
}

// 👉 สร้าง type ใหม่ชื่อ FullUser ที่ทุก field เป็น required
type FullUser = Required<User>
// ✅ Expected:
// type FullUser = { name: string; email: string }

//2.2
type Product22 = {
    id: string;
    price: number;
  }
  
  // 👉 สร้างตัวแปรชื่อ `staticProduct` ที่เป็น readonly ทั้ง object
  const staticProduct: Readonly<Product22> = {id:"2",price:2000}
  // ✅ ลองเปลี่ยนค่ามันแล้วให้ TypeScript โวยวายด้วย
  
//2.3
type Settings = {
    theme: string;
    sound: boolean;
    notifications: boolean;
  }
  
  // 👉 สร้าง type `UpdateSettings` ที่ให้แก้บาง field ได้ (optional) 
  type UpdateSettings = Readonly<Partial<Settings>>
  // แต่ถ้าใส่มาแล้วต้อง **ห้ามแก้ภายหลัง**
  // ✅ คาดหวัง:
  // type UpdateSettings = Readonly<Partial<Settings>>


// Pick Omit

//3.1
type Product31 = {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
// 👉 สร้าง type ProductPreview ที่มีแค่ name กับ price
type ProductPreview = Pick<Product31, "name" | "price">

//3.2
type Admin = {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  
  // 👉 สร้าง type AdminPublic ที่ไม่มี password
  type AdminPublic = Omit<Admin,"password">  

//3.3 Pick / Omit / Partial
type Settings33 = {
    theme: string;
    sound: boolean;
    notifications: boolean;
  }
  
  // 👉 สร้าง type OptionalSettings ที่มีเฉพาะ sound กับ notifications และเป็น optional ทั้งหมด
  type OptionalSettings = Partial<Pick<Settings33,"sound" | "notifications">>
  // ✅ คาดหวัง: Partial<Pick<Settings, "sound" | "notifications">>

//bonus ต่างเพราะ ฝั่งซ้ายแม่งเลือกแค่อย่างเดียว ฝั่งขวาได้สอง
  
// infer

//4.1
                        //ตรงนี้แหละ pattern 
type GetReturn<T> = T extends (...arg: any[]) => infer R ? R : never 
//กูเริ่มเข้าใจ infer ละ ไอหลัง extend มันก็คือ propety ของ type ที่เราจะลองดึง type ออกมาใช่ปะ

            //ตรงนี้แหละที่จะเอาไปเขียน
type Fn1 = () => string
type Fn2 = (a: number, b: number) => number[]

type R1 = GetReturn<Fn1> // ❓ ได้ string
type R2 = GetReturn<Fn2> // ❓ ได้ number[]

//4.2
type UnwrapPromise<T> = T extends Promise<infer P> ? P : never

type A42 = Promise<string>
type B = Promise<{ id: number }>

type T1 = UnwrapPromise<A> // ❓ ได้ string
type T2 = UnwrapPromise<B> // ❓ ได้ { id: number }

//4.3
type FnList = [() => string, () => number, () => boolean]

type AllReturns<T> = T extends Array<(...args: any[]) => infer P> ? P : never // มึงเขียนเองเลย infer ยังไงให้มันได้ union

type Result = AllReturns<FnList> // ❓ ได้ string | number | boolean


// infer ซ้อน infer 

//5.1 
type WithHandler = {
  name: string;
  handler: () => number[]
}

// 👉 สร้าง `ExtractHandlerReturn<T>`
type ExtractHandlerReturn<T, K extends keyof T> = T[K] extends (...args:any[]) => infer R? R : never
// ที่จะได้ return type ของ method `handler` ถ้ามี
// ❓ ผลลัพธ์: number[]

//5.2
type A52 = Promise<Promise<string>>
type B52 = Promise<number>
type C52 = string

// 👉 สร้าง `DeepUnwrap<T>` ที่สามารถดึง type ลึกสุดของ promise ซ้อนๆ
type DeepUnwrap<T> =   T extends Promise<infer U> ? DeepUnwrap<U> : T;
// ❓ A = string
// ❓ B = number
// ❓ C = string (ไม่ต้องเปลี่ยน)

//5.3
type API = {
  getUser: () => string;
  getAge: () => number;
  getOnline: () => boolean;
}

// 👉 สร้าง `AllReturns<T>` ที่รวม return type ของทุกฟังก์ชันใน object T
type AllReturns2<T> = T[keyof T] extends (...args: any) => infer P? P : never
// ❓ ผลลัพธ์: string | number | boolean

//5.4
type Events = {
  click: (x: number) => void
  drag: (x: number, y: number) => void
}

// 👉 สร้าง `AllArgs<T>` ที่ได้เป็น union ของ args แต่ละฟังก์ชัน
type AllArgs<T> = T[keyof T] extends (...arg: infer P) => void ? P : never
// ❓ ผลลัพธ์: [number] | [number, number]

//bonus
type A_bonus5 = string[][]
type B_bonus5 = number[][][]
type C_bonus5 = string

type Flatten<T> = T extends (infer P)[] ? Flatten<P> : T;

type R1_bonus5 = Flatten<A_bonus5> // string
type R2_bonus5 = Flatten<B_bonus5> // number
type R3_bonus5 = Flatten<C_bonus5> // string








  



  