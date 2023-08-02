//1 deposit money
//2 determine number of lines to bet on
//3 Collect bet amount
//4 spin slot machine
//5 check if the user won
//6 give the winnings to the user
//7 prompt them if they want to play again? if yes, go to step 1, if no, exit the program


// order of how to structure code
// libary/import at the top
// global variables
// functions


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A" : 2, //key A paired with the value of 2
    "B": 4,
    "C": 6,
    "D": 8,
}

//SYMBOLS_COUNT["A"] -> 2

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,


}



//function for deposit
const deposit = () => {

 while(true){ 
    const despositAmount = prompt("Enter a deposit amount:");
    //"17.2" -> 17.2
    //hello -> Nan
    const depositAmount = parseFloat(despositAmount);

    if (isNaN(depositAmount)|| depositAmount <= 0) {
        console.log("invalid deposit amount, Please try again")

    } else {
        return depositAmount
    }
}  

};

// function for getting number of lines to bet on
const getNumberofLines = () => {
    while(true){ //runs forever until we return a value
        const lines = prompt("(Enter number of lines to bet on 1-3): ");
        const numberOfLines = parseInt(lines);

        if (isNaN(numberOfLines) || numberOfLines > 3 || numberOfLines <= 0){
            console.log("invalid number of lines, Please try again")
        } else {
            return numberOfLines
        }
    }

}

//balance is the params
const getBet = (balance,lines) => {
    while(true){ //runs forever until we return a value
        const bet = prompt("Enter bet per line:");
        const numberbet = parseInt(bet);

        if (isNaN(numberbet) || numberbet <=0 || numberbet > balance / lines){
            console.log("invalid bet, Try again")
        } else {
            return numberbet
        }
    }


}


const spin = () => {
    const symbols = []; // collection of elements
    for (const [symbol,count] of  Object.entries(SYMBOLS_COUNT)) {
        for (let i =0; i<count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[],[],[]];
    for (let i =0 ; i<COLS;i++) {
        const reelSymbols = [...symbols];  
        for (let j =0; j< ROWS;j++) {

        }
    }
};

spin();
//define the function before you call them no matter what order they are in
// let is a variable that can be changed/adjusted along the way

let balance = deposit();
const numberOfLines = getNumberofLines();
const bet = getBet(balance, numberOfLines);

