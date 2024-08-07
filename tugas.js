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

//5. Gunakan spread operator untuk menggabungkan dua array dan dua objek

// Spread Operator pada Array
const angka1 = [4, 5];
const angka2 = [...angka1, 6, 7];
console.log(angka2); // Output: [4, 5, 6, 7]

// Spread Operator pada Object
const user1 = { nama: "Andra", umur: 25 };
const user2 = { ...user1, pekerjaan: "Developer" };
console.log(user2); // Output: { nama: "Andra", umur: 25, pekerjaan: "Developer" }

//6. Buat sebuah modul dengan export dan import fungsi di file lain
// Mengimpor fungsi tambah,dan  kurang dari js/no6.js
// import { tambah, kurang} from './no6';

// Menggunakan fungsi dan variabel yang diimpor
// const hasilTambah = tambah(4, 5);
// const hasilKurang = kurang(9, 3);

// console.log(`Hasil tambah: ${hasilTambah}`); // Output: Hasil tambah: 9
// console.log(`Hasil kurang: ${hasilKurang}`); // Output: Hasil kurang: 6


//7. Buat dan gunakan promises, lalu ubah menjadi async/await
// Menggunakan Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("DONE");
      }, 1000);
    });
  };
  
  fetchData().then(response => console.log(response)); 
  
  // Menggunakan Async/Await
  const getData = async () => {
    try {
      const response = await fetchData();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  getData(); 
  
  //8. Buat class sederhana, lalu kembangkan dengan inheritance
  // Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Hello, my name ${this.nama} and my age ${this.umur} yo.`;
    }
  }
  
  const andra = new Person("Andra", 25);
  console.log(andra.perkenalan()); 
  
 
  class Pengajar extends Person {
    constructor(nama, umur, mataPelajaran) {
      super(nama, umur);
      this.mataPelajaran = mataPelajaran;
    }
  
    mengajar() {
      return `Saya mengajar ${this.mataPelajaran}.`;
    }
  }
  
  const DIAndra = new Pengajar("Andra", 25, "REACTJS");
  console.log(DIAndra.perkenalan()); 
  console.log(DIAndra.mengajar());   

