const heading = document.getElementById("heading");
heading.innerText = "Welcome to JavaScript DOM";

const paragraph = document.getElementById("paragraph");
const changeTextBtn = document.getElementById("changeTextBtn");
changeTextBtn.addEventListener('click' , function() {
paragraph.innerText = "Paragraph text changed!";
});

const backgroundBtn = document.getElementById("backgroundBtn");
backgroundBtn.addEventListener('click' , function() {
document.body.style.backgroundColor = "lightblue";
});

const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener('click' , function() {
alert("DOM is working!");
});


const userInput = document.getElementById("userInput");
const updateBtn = document.getElementById("updateBtn");
const outputText = document.getElementById("outputText");

updateBtn.addEventListener('click' , function() {
outputText.textContent = userInput.value;
});
