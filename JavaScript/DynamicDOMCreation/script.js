const H = document.createElement("h3");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

P.classList.add("text-secondary","fs-6");
P.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo modi distinctio ratione? Porro quae eius atque amet quos temporibus inventore consectetur nobis pariatur! Vel et officia enim nulla doloribus. Animi enim qui possimus aliquid voluptates tempora adipisci repellat minus, alias voluptatem hic quisquam reprehenderit, provident vel ab sapiente labore iusto! Consequatur quasi sequi perferendis minus et sint suscipit quis quaerat distinctio ratione maiores non atque nobis, eos consequuntur nostrum mollitia nam fugit inventore? Officiis harum reiciendis illo maiores! Soluta labore hic itaque perspiciatis corporis minus deserunt iste, quas vitae magnam, eos asperiores, porro doloribus quibusdam harum expedita dolore. Ab, possimus?";

B.classList.add("btn", "btn-success", "shadow");
B.textContent = "Submit";

const div = document.getElementById("task1");

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append(" | Welcome");


