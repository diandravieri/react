//1. Buatlah variabel menggunakan let dan const
// Menggunakan let
let nama = "Andra";
console.log(nama); // Output: Andra

nama = "Bang Andra";
console.log(nama); // Output: Bapak Andra

// Menggunakan const
const pi = 3.14;
console.log(pi); // Output: 3.14
// pi = 3.14159; // Error: Assignment to constant variable

//2. Buat arrow function yang menerima parameter dan mengembalikan nilai
const sapa = (nama) => `Halo, ${nama}!`;
console.log(sapa("Andra")); // Output: Halo, Andra!

//3. Gunakan template literals untuk menggabungkan string dan variabel
const name = "Andra";
const pesan = `Hai, ${name}. Welcome!`;
console.log(pesan); // Output: Hai, Andra. Welcome!

//4. Praktikkan destructuring pada array dan objek
// Destructuring Array
const angka = [4, 5, 6];
const [empat, lima, enam] = angka;
console.log(empat, lima, enam); // Output: 4 5 6

// Destructuring Object
const user = { namaa: "Andra", umur: 25 };
const { namaa, umur } = user;
console.log(namaa, umur); // Output: Andra 25