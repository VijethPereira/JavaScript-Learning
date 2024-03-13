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


//forEach example:
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) {   //here the data to the val will be sent from the -
  console.log(val);                    //- foreach an it will execute the function itself
})

//using arraw
arr.forEach((val) => {
  console.log(val); 
})


//callBack parameters examples 
arr.forEach((val,indx) => {
  console.log(`${val} is in ${indx}`); 
})

//third parameter wil have array
arr.forEach((val,indx,ary) => {
  console.log(val);
  console.log(ary[indx]);
})


//map method
let newarr = arr.map(val => {
  return val * 2;
})
console.log(newarr);

//filter
newarr = arr.map(val => {
  if(val % 2 === 0)
  return val;
})
console.log(newarr);