const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function mainMenu(){
    console.log("Factorial Application");

    console.log("1. Say Hello");
    console.log("2. Compute Factorial");
    console.log("3. Exit");

    rl.question("Enter your choice (1-3): ", choice =>{
        
        if(choice==="1"){
            console.log("Hello There!");
            backToMenu();
        } else if (choice==="2"){
           computeFactorial();
        } else if (choice==="3"){
            console.log("Exiting program...Goodbye");
            rl.close();
        } else{
            console.log("Invalid choice. Please Try Again");
            mainMenu();
        }

    })
}

function computeFactorial(){
    console.log("Factorial");
            
        rl.question("Enter a number for factorial: ", (numStr) =>{
            let num = parseInt(numStr);

            if(isNaN(num) || num<0){
                console.log("Please enter a non-negative integer");
            } else {

                let fact = 1;

                    for (let i = 1; i <= num ; i++){
                        fact *=i;
                    }

                    console.log("The factorial of "+ num + " is " + fact);
                }
            backToMenu();
        });
}

function backToMenu(){
    console.log("--------");
    console.log("1. Back to menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (1-2) :", (backToMenuChoice) =>{
        if(backToMenuChoice ==="1"){
            console.clear();
            mainMenu();
        } else if (backToMenuChoice === "2"){
            console.log("Exiting program...Goodbye");
            rl.close();
        } else {
            console.log("Invalid Choice. Please Try Again");
            backToMenu();
        }
    })
}
mainMenu();
