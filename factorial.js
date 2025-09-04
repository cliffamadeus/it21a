const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log("Factorial Application");

console.log("1. Say Hello");
console.log("2. Compute Factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3)", choice =>{
    
    if(choice==="1"){
        console.log("Hello There!");
    } else if (choice==="2"){
        console.log("Factorial");
    } else if (choice==="3"){
        console.log("Exit");
    } else{
        console.log("Invalid choice. Please Try Again");
    }

})