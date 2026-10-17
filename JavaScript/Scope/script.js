function abc() {
  console.log("i am Function ABC");
}

abc();

def();

let x = 10,
  y = 20;
console.log(x + y);

function def() {
  console.log("I am Function DEF");
}

// Scope Chain

let a = 10;
{
  let a = 20;
  {
    let a = 30;
    {
      let a = 40;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
console.log(a);
