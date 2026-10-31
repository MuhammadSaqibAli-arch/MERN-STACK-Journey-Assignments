let age = 18;
const feePaid = true;
if(age >= 18 && feePaid ){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}

const emailCorrect = "muhummadsaqibali@gmail.com";
const phoneCorrect = "03329152885";

let input_email = prompt(`Enter Email or PhoneNumber to Login`);

if(input_email === emailCorrect || input_email === phoneCorrect){
    console.log(`Login Succesfully`);
}else{
    console.log(`Invalid Information`);
}

let isBlocked = false;
console.log(!isBlocked ? "Access Alowed" : "Access Denied") ;

const isLoggedIn = false;
const hasPremium = true;
const hasCoupon = true;

if(isLoggedIn && (hasPremium || hasCoupon)){
    console.log(`you get special discount`);
}else{
    console.log(`you can't get discount`);
    
}
