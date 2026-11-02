const paragraph = document.getElementById("myParagraph");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const checkBtn = document.getElementById("checkBtn");
const buyBtn = document.getElementById("buyBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
addBtn.addEventListener("click", function () {
    paragraph.classList.add("highlight");
});
removeBtn.addEventListener("click", function () {
    paragraph.classList.remove("highlight");
});
toggleBtn.addEventListener("click", function () {
    paragraph.classList.toggle("highlight");
});
checkBtn.addEventListener("click", function () {
    if (paragraph.classList.contains("highlight")) {
        alert("Class exists");
    } else {
        alert("Class not exists");
    }
});
buyBtn.addEventListener("click", function () {
    buyBtn.classList.toggle("active-btn");
});
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});