function ShowAlert() {
  alert("Click Me Button Clicked Using HTML Events");
}

document.getElementById("clkbtn").addEventListener("click", ShowAlert2);

function ShowAlert2() {
  alert("Click Me Button Clicked Using JS Events");
}

document.getElementById("box").addEventListener("click", () => {
  document.getElementById("box").innerText = "The Box Is Clicked";
});

document.getElementById("BoxHover").addEventListener("mouseenter", () => {
  document.getElementById("BoxHover").innerText = "Mouse Enter in the Box";
});
document.getElementById("BoxHover").addEventListener("mouseout", () => {
  document.getElementById("BoxHover").innerText = "Mouse Exit in the Box";
});

document.getElementById("fullname").addEventListener("keydown", (e) => {
    (e.key==="Enter") && console.log(document.getElementById("fullname").ariaValueMax.trim());
});
