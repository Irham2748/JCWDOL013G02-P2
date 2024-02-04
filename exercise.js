// Soal No. 1
// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit
// Rumus konversi celcius ke fahrenheit adalah = 5/9 x ('F - 32)
let celcius = 60;
let fahrenheit = 140 - 32;
let result = 5/9 * fahrenheit
console.log(result);

// Soal Node. 2 
// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
let angka;
angka = 2;
let status;
if (angka % 2 == 0) {
  status = "Genap";
} else {
  status = "Ganjil";
}
console.log(`Angka ${angka} adalah bilangan ${status}`);

// Soal No. 3
// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(`${num} is prime = ${isPrime}`);

// Soal No. 4 
// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 7
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(`Jumlah dari urutannya adalah ${sum}`);

// Soal No. 5
// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
var angka1 = 6;
var pengali = 1;
for (var i = angka1; i >= 1; i--) {
  pengali *= i;
}
console.log(pengali);

// Soal No. 6 
// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
let angkaFibo = 15;
let angkaAwalFibo = 1;
let hasilFibo = 0;
for (let i = angkaAwalFibo; i <= angkaFibo; i++) {
  hasilFibo += angkaAwalFibo;
  angkaAwalFibo = hasilFibo - angkaAwalFibo;
}
console.log(hasilFibo);