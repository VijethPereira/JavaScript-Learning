let a = 5;
let b = 2;

console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);

console.log("a++ = ", a++,"and b++ = ", b++); //no change in output as its post increment
console.log ("new a = ", a , "and new b = ", b);

console.log("++a = ", ++a,"and ++b = ", ++b); //changes in output as its pre increment

console.log("a+=b = ", a+=b); 

//see readme for comprasion and logical operators

//if
let age = 25
if(age >= 18){
    console.log("can vote");
}

//if-else
age = 15;
if(age>=18){
    console.log("can vote");
}
else {
    console.log("cannot vote")
}

//else-if
if(age < 18){
    console.log("junior");
}
else if(age > 60) {
    console.log("senior");
}
else {
    console.log("youth");
}

//switch
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}