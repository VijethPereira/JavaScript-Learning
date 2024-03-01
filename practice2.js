//ask the user to keep guessing the game number until the user enters correct value.
//remove the other script from html

let guess = true;
let num = 25;
do {
    let GuessNum = prompt("Guess the number : ");
    if(GuessNum == num){
        guess = false;
        console.log("Correct Guess");
    }
}while(guess)