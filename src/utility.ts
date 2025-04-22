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



  



  