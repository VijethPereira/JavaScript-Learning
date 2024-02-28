//Q: get user to input a number using a prompt. check if number is a multiple of 5 or not.
//remove the script.js from index.html before executing this.
const number = prompt("Enter a number:")
if(number % 5 == 0){
    console.log(number," is multiple of 5");
}
else {
    console.log(number," is not multiple of 5")
}