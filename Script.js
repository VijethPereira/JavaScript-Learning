function myFunction() {
  //defination
  console.log("Welcome");
}

myFunction(); //call

//with parameters
function parameter(msg) {
  console.log(msg);
}

parameter("parameter");

//function that return value

function sum(x, y) {
  //x and y are local to function.
  return x + y;
}

let result = sum(5, 6); //value to be stored in variable.
console.log(result);

//Arrow function.modern JS
const subtract = (x, y) => {
  console.log(x - y);
};

subtract(6, 4);
