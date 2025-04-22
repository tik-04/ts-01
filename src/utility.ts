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
  
  



  