let text = document.querySelector("h1").innerText;
console.log(text + " of Document");

function submit() {
  console.log("Data has been recieved!");

  const name = document.querySelector("#FullName").values;
  const email = document.getElementById("email").values;
  const phone = document.getElementById("phone").values;
  const DOB = document.getElementById("dob").values;

  console.log("Full Name: " + name);
  console.log("Email: " + email);
  console.log("Phone no.: " + phone);
  console.log("DoB: " + DOB);
}

const coursediv = document.getElementById("course");
console.log(coursediv);

const heading = document.querySelector("h2");
console.log(heading);

console.log(heading.parentElement.firstElementChild);
console.log(heading.parentElement.children);
console.log(heading.parentElement.lastElementChildElementChild);

