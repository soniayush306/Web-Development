const data = [
  {
    title: "Iphone 13 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "41,951",
    button2: "Bye Now",
  },
  {
    title: "Iphone 14 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "55,951",
    button2: "Bye Now",
  },
  {
    title: "Iphone 15 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "75,951",
    button2: "Bye Now",
  },
  {
    title: "Iphone 16 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "89,951",
    button2: "Bye Now",
  },
  {
    title: "Samsung S24 ultra",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "92,995",
    button2: "Bye Now",
  },{
    title: "Samsung S25 ultra",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "1,02,995",
    button2: "Bye Now",
  },{
    title: "Samsung Flip 4",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "1,12,995",
    button2: "Bye Now",
  },{
    title: "Samsung Fold Z",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "1,25,995",
    button2: "Bye Now",
  },
  {
    title: "Redmi Note 12light",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "17,999",
    button2: "Bye Now",
  },
  {
    title: "Redmi Note 12 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "17,999",
    button2: "Bye Now",
  },
  {
    title: "Redmi Note 13 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "17,999",
    button2: "Bye Now",
  },
  {
    title: "Redmi Note 14 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "17,999",
    button2: "Bye Now",
  },
  {
    title: "Motorola 50 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "32,995",
    button2: "Bye Now",
  },
  {
    title: "Motorola Edge 60",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "32,995",
    button2: "Bye Now",
  },
  {
    title: "Motorola 70 pro",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "32,995",
    button2: "Bye Now",
  },
  {
    title: "Motorola Fold 4",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "32,995",
    button2: "Bye Now",
  },
  {
    title: "Nothing Phone 2a",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "142,998",
    button2: "Bye Now",
  },
  {
    title: "Nothing Phone 2",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "142,998",
    button2: "Bye Now",
  },
  {
    title: "Nothing Phone 4",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "142,998",
    button2: "Bye Now",
  },
  {
    title: "Nothing Phone 4a",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "142,998",
    button2: "Bye Now",
  },
  {
    title: "Vivo T3x",
    description: "It is very good phone, Please do not purchase it at all",
    button1: "24,996",
    button2: "Bye Now",
  },
];

function add_Data(item) {
  const myCard = document.createElement("div");

  myCard.classList.add("col-3", "p-3");

  myCard.innerHTML = `
            <div class="p-2 border shadow rounded">
              <h3>${item["title"]}</h3>
              <p>
                ${item.description}
              </p>
              <div class="row px-3">
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-outline-primary w-full">${item.button1}</button>
                </div>
                <div class="col-6 p-2 d-grid">
                  <button class="btn btn-primary w-full">${item.button2}</button>
                </div>
              </div>
            </div>
            `;

  let CP = document.getElementById("card-parent");

  console.log(CP);

  CP.appendChild(myCard);
}

// add_Data(data[0]);

data.forEach((element) => add_Data(element));

const student = {
  name: "Aarav",
  age: 20,
};
console.log(student);
student.name = "Manav";

console.log(student);
student.subject = "CSE";

console.log(student);

delete student.name;
console.log(student);