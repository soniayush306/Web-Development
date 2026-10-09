
console.log("1. Check your Balance");
console.log("2. Withdraw Money");
console.log("3. Mini Statement");
console.log("4. Change Pin");
console.log("5. Deposit Cash");
console.log("6. Exit");

let Choice = 1 ;

switch(Choice) {
    case 1: {
        console.log("Check your Balance");
        break;
    }
    case 2: {
        console.log("Please Collect your Cash");
        break;
    }
    case 3: {
        console.log("Please find your transaction");
        break;
    }
    case 4: {
        console.log("Enter your new Pin");
        break;
    }
    case 5: {
        console.log("Put your cash into Machine");
        break;
    }
    case 6: {
        console.log("Thank you for visiting");
        break;
    }
    default: {
        console.log("Wrong Choice");
        
    }
}


// if else if
if (Choice === 1) {
    console.log("Check your Balance");
} else if  (Choice === 2) {
    console.log("Please Collect your Cash");
} else if  (Choice === 3) {
    console.log("Please find your transaction");
} else if  (Choice === 4) {
    console.log("Enter your new Pin");
} else if  (Choice === 5) {
    console.log("Put your cash into Machine");
} else if (Choice === 6) {
    console.log("Thank you for visiting");
} else {
    console.log("Wrong Choice");
}