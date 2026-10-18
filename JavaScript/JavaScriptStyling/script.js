function b1ON() {
  const b1 = document.getElementById("bulb1");
  b1.classList.add("b1");
}
function b1OFF() {
  const b1 = document.getElementById("bulb1");
  b1.classList.remove("b1");
}

function b2on_off() {
  const b2 = document.getElementById("bulb2");
  b2.classList.toggle("b2");
}

function ColorChange() {
  const b3color = document.getElementById("bulb3");
  const color = document.getElementById("b3color").value;

  b3.style.backgroundColor = color;
}
function b3OFF() {
  const b3 = document.getElementById("bulb3");

  b3.style.backgroundColor = "black";
}
