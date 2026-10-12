function sum(a, b) {
  let c = a + b;
  console.log(c);
}
sum(5, 15);

//default perameter
function sum_with_d(x, y = 10) {
  console.log(x + y);
}
sum_with_d(7);
sum_with_d(8, 11);

// return
function calculate(a, b, c) {
  return a + b - c;
}
let answer = calculate(5, 6, 7);
console.log(answer);

// function expression
const greet = function () {
  console.log("Welcom to RICR");
};
greet();
