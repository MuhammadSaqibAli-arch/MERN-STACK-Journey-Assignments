let form = document.querySelector("form");
let btn = document.getElementById("submit-btn");
let reset = document.getElementById("reset-btn");
let inp = document.getElementById("text-field");
let email = document.getElementById("email-field");
let pass = document.getElementById("pass-field");
let name_error = document.getElementById("text-error");
let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");
let form_error = document.getElementById("form-error");
form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    if(inp.value.trim() === "" ){
        name_error.textContent = "Name is required";
        name_error.style.color = "red";
        name_error.style.fontSize = "12px";
        return;
    }
    if(email.value.trim() === "" ){
       email_error.textContent = "Email is required";
       email_error.style.color = "red";
       email_error.style.fontSize = "12px";

        return;
    }
    if(!email.value.includes("@")){
        email_error.textContent = "Invalid Email '@' ";
        email_error.style.color = "red";
        email_error.style.fontSize = "12px";

        return;
    }
    if(pass.value.trim() === "" ){
        pass_error.textContent = "pass is required";
        pass_error.style.color = "red";
        pass_error.style.fontSize = "12px";

        return;
    }
    if(pass.value.length < 6){
        pass_error.textContent = "Password must be at least 6 characters";
        pass_error.style.color = "red";
        pass_error.style.fontSize = "12px";

        return;
    }
    form_error.textContent = "Form Submitted Successfully";
    form_error.style.color = "green"
});
reset.addEventListener('click' , ()=>{
    form.reset();
    form_error.textContent = " ";
    name_error.textContent = " ";
    email_error.textContent = " ";
    pass_error.textContent = " ";
});
