let myImage = document.getElementById("myImage");
let imageSource = myImage.getAttribute("src");

console.log("Task 1 - Image Source:", imageSource);

let changeImage = document.getElementById("changeImage");
let changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", function () {
    changeImage.setAttribute(
        "src",
        "https://picsum.photos/id/1025/300/200"
    );
    console.log("Task 2 - Image Source Changed");
});

let nameInput = document.getElementById("nameInput");
nameInput.setAttribute("placeholder", "Enter your name");
console.log("Task 3 - Placeholder Added");

let disabledInput = document.getElementById("disabledInput");
let enableBtn = document.getElementById("enableBtn");

enableBtn.addEventListener("click", function () {
    disabledInput.removeAttribute("disabled");
    console.log("Task 4 - Input Enabled");
});

let myParagraph = document.getElementById("myParagraph");
let checkClass = myParagraph.hasAttribute("class");

console.log("Task 5 - Does Class Attribute Exist?", checkClass);

let myLink = document.getElementById("myLink");
let changeLinkBtn = document.getElementById("changeLinkBtn");

changeLinkBtn.addEventListener("click", function () {
    myLink.setAttribute("href", "https://www.wikipedia.org");
    console.log("Task 6 - Link Destination Changed");
});