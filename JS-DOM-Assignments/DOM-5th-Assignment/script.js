const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function() {
alert("Button Clicked Successfully");
});

const changeTextBtn = document.getElementById("changeTextBtn");
const textPara = document.getElementById("textPara");

changeTextBtn.addEventListener("click", function() {
textPara.innerText = "Text Updated Successfully";
});

const backgroundBtn = document.getElementById("backgroundBtn");

backgroundBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "#dbeafe";
});

const userInput = document.getElementById("userInput");
const outputText = document.getElementById("outputText");

userInput.addEventListener("input", function() {
outputText.innerText = userInput.value;
});

const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseenter", function() {
colorBox.style.backgroundColor = "#16a34a";
});

colorBox.addEventListener("mouseleave", function() {
colorBox.style.backgroundColor = "#2563eb";
});

const doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", function() {
alert("Double Click Detected");
});
