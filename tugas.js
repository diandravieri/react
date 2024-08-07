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
