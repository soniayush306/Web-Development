const student = ["Ayush", "Satyam", "Sumit", "Uday"];

if (student.includes("Satyam")) {
  console.log("Avilable");
} else {
  console.log("Unavilable");
}

const number = [2, 5, 8, 11, 14, 7, 3, 1, 8, 9, 15, 52, 22];

const filteredNumbers = number.filter((number) => number > 5);
const doubleN = filteredNumbers.map((number) => number * 2);

const data = [2, 5, 8, 11, 14, 7, 3, 1, 8, 9, 15, 52, 22];

let sum = 0;
sum = data.reduce((sum, item) => (sum = sum + item));
console.log(sum);

const sub = data.reduce((sub = 0, item) => (sub = +item));
console.log(sub);
