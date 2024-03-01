//for loop
console.log("for")
for(let i = 1; i <= 5; i++){
    console.log(i);
}

//While
let i = 1
console.log("while")
while(i <= 5){
    console.log(i);
    i++;
}

//do while
i = 1;
console.log("do while")
do {
    console.log(i);
    i++;
}while(i <= 5)

//for-of loop => used for string and arrays
let name = "Vijeth";
console.log("for-of loop")
for(let i of name){
    console.log(i);
}

//for-in loop => used for objects and arrays
let student = {
    name : "Vijeth",
    age : 26,
    isPass : true
};
console.log("for-in loop")
for(let key in student) { 
    console.log(key, "= ", student[key]);
}


//---------------Strings---------------
let str = "Abc";
let str1 = 'ABC';

//properties:
//length
console.log("string length = ",str.length);

//Template Literals => using => ``(backticks) and alse we can use the epressions inside the quote by using {}
console.log(`this is a Template Litral and the str is ${str}`); 


//string methods.
console.log("to upper")
console.log(str.toUpperCase());

console.log("to lower")
console.log(str.toLowerCase());

str = "   AB C   ";
console.log("trim spaces from start and end")
console.log(str.trim());