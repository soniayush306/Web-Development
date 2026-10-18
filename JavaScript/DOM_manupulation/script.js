const headingText = document.getElementById("heading");
const paraText = document.getElementById("studentMessage");
const btnText = document.getElementById("submitButton");

console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(btnText.textContent);

headingText.innerText = "LNCT Group";
paraText.innerText = "Welcome Back Student!!";

function UpdateMyName(){
    const myName = document.getElementById("myName").value.trim();
    paraText.innerText = "Welcome Back " + myName + "!!";
}

function Next(){
    const myName = document.getElementById("myName");

    myName.type = "password"
    myName.Name = "FullName" 
}


const body = document.querySelector("body")
console.log(body);

