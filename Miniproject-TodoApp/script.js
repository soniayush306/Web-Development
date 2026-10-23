function addTask(){
    const newTask = document.getElementById("taskInput").value.trim()
        
    const LI = document.createElement("li");
    LI.classList.add("p-3", "d-flex");

    const DIV = document.createElement("div");
    DIV.textContent = newTask;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
    BUTTON.textContent = "Delete";
    BUTTON.onclick = () => LI.remove();

    LI.appendChild(DIV);
    LI.appendChild(BUTTON);

    document.getElementById("taskList").appendChild(LI);

    document.getElementById("taskInput").value = "";
}
