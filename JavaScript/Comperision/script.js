let a = 10;
let b = 20;
let c = "10";
let d = "20";

console.log(a==b);
console.log(a!=b);
console.log(a==c);
console.log(b===d);
console.log(b!==d);

// increment decrement
console.log(a++);
console.log(a--);
console.log(a);
console.log(--a);

console.log(b++);
console.log(b++);
console.log(--b);

// 
console.log(a > b ? "Hello" : "Bye");
console.log(b > d ? "Good" : "Bad");

// if else condition
if (a < b ) {
    console.log("Hello");
} else {
    console.log("Bye");
}

// loop
for( var i = 0 ; i<5 ; i++) {
    console.log("We are learning JavaScript");
}for( var i = 0 ; i<a ; i++) {
    console.log("We are learning JavaScript" , i);
}