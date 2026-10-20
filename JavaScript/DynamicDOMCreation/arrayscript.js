const arr = [
  "Ayush",
  "Satyam",
  "Sumit",
  "Uday",
  "Aesha",
  "Rishi",
  "Harsh",
];

const list = document.createElement("ol");

arr.forEach((item) => {
  const l = document.createElement("li");
  l.textContent = item;
  list.appendChild(l);
});

document.getElementById("mylist").appendChild(list);
