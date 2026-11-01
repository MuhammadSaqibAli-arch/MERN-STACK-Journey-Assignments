let h1 = document.getElementById("heading");
let headingBtn = document.getElementById("changeHeading");
headingBtn.addEventListener("click" , ()=>{
    h1.textContent = "DOM Element Selected by ID";
});

let para = document.getElementsByTagName("p");
para[0].textContent = "First paragraph updated";

let btn = document.getElementsByClassName("btn");
btn[1].textContent = "Click Me!"

let color = document.querySelector("#h1");
color.style.color = "blue";

let li = document.querySelectorAll("li");
for(let list of li){
    list.style.color = "green"
};

let change = document.querySelector(".changeble");
change.style.fontSize = "20px";
change.style.width = "50vw";
change.style.color = "white";
change.style.backgroundColor = "black";

