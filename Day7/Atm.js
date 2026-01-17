let totalAmount = 100000;

let userChoice = Number(prompt("Enter a Choice [1. Deposit , 2. Withdraw , 3.Check Balalance, 4.Exit]: "));

if(userChoice === 1){
    let depositAmount = Number(prompt("Enter a Amount to deposite: "));
    (depositAmount > 0) ? (totalAmount += depositAmount) : ("Invalid Amount");
    console.log("TotalBalance: " , totalAmount);

}else if 
    (userChoice === 2){
      let WithdrawAmount = Number(prompt("Enter a Amount to Withdraw: "));
      
      if (WithdrawAmount > 0 && totalAmount >= WithdrawAmount){
        totalAmount -=  WithdrawAmount ;
        console.log("Your Current Balance is : ", totalAmount);
        console.log("Successfully withdraw.")
      }else{
        console.log("Enter a valid Amount.");
      }

    }else if (userChoice === 3){
        console.log("Your TOtal Balance is : ", totalAmount);

    }
    else{
       
            console.log("Thanks to Visit Mr Max Bank.");
        }
    
