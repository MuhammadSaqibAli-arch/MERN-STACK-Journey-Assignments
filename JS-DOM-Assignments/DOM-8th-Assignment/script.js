let inp = document.getElementById("text-field");
let btn = document.getElementById("btn");
let save = document.getElementById("save");
let para = document.getElementById("para");
let remBtn = document.getElementById("remBtn");
let remove = document.getElementById("remove");
let toggleMode = document.getElementById("toggleMode");
let body = document.querySelector("body");

btn.addEventListener('click' , ()=>{
    let data = inp.value;
    localStorage.setItem("Name" , data);
    save.textContent = "Name is Save in Browser Storage";
    save.style.color = "green";
    save.style.fontSize = "11px";
});
const name = localStorage.getItem("Name");
para.textContent = `Welcome ${name}`;

remBtn.addEventListener('click' , ()=>{
    localStorage.clear();
    remove.textContent = "Name is remove from Browser Storage";
    remove.style.color = "red";
    remove.style.fontSize = "11px";
});


if (getComputedStyle(body).backgroundColor === "rgb(255, 255, 255)") {
    toggleMode.textContent = "Dark Mode";
}

toggleMode.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleMode.textContent = "Light Mode";
    } else {
        toggleMode.textContent = "Dark Mode";
    }

});