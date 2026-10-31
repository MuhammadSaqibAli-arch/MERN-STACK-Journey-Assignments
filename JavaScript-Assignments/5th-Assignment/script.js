const isPassword = false;
if(isPassword){
    console.log(`Login Successfully`);
}else{
    console.log(`Login Failed`);
}

const isApproved = true;
if(isApproved){
    console.log(`Order Approved`);
}else{
    console.log(`Ordered Failed`);
}


const marks = 70;
if(marks >= 50){
    console.log(`Student pass`);
}else{
    console.log(`Student Fail`);
}

const isOnTime = true;
if(isOnTime){
    console.log(`Mark Present`);
}else{
    console.log(`Mark Absent`);
}

const isUserPremium = true;
if(isUserPremium){
    console.log(`Discount Applied`);
}else{
    console.log(`No Discount Applied`);
}

const performanceScore = 68;
if(performanceScore >= 90 && performanceScore <= 100){
    console.log(`Excellent`);
}else if(performanceScore >= 70 && performanceScore <= 89){
    console.log(`Good`);
}else if(performanceScore >= 50 && performanceScore <= 69){
    console.log(`Average`);
}else{
    console.log(`poor`);
}