let inp = document.getElementById("input-field");
let ul = document.getElementById("ul-list");
let btn = document.getElementById("inpBtn");
let clearBtn = document.getElementById("clearBtn");
let counter = document.getElementById("counter");


function updateCounter() {
    counter.textContent = `Total Tasks: ${ul.children.length}`;
}


btn.addEventListener('click', () => {

    const inpData = inp.value.trim();

    if (inpData === "") {
        alert("Item cannot be empty");
        return;
    }

    const list_item = document.createElement("li");

    list_item.classList.add("list");
    list_item.textContent = inpData;

    let delBtn = document.createElement("button");

    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor = "red";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "4px";
    delBtn.style.padding = "4px";
    delBtn.style.cursor = "pointer";

    list_item.appendChild(delBtn);

    ul.appendChild(list_item);

    inp.value = "";

    updateCounter();

});


ul.addEventListener("click", (event) => {

    if (event.target.matches("button")) {

        event.target.parentElement.remove();

        updateCounter();

    }

});


ul.addEventListener("dblclick", (event) => {

    if (event.target.matches("li")) {

        event.target.classList.toggle("completed");

    }

});


clearBtn.addEventListener("click", () => {

    ul.innerHTML = "";

    updateCounter();

});


updateCounter();