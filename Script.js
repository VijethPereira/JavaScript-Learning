//Arrays:

let marks = [67,76,98,65];
let grade = ["A","B","C"];
console.log(marks);

//length.
console.log("length");
console.log(marks.length);

//normal for loop
console.log("looping");
for(let i = 0; i< marks.length; i++){
    console.log(marks[i]);
}

//for in loop for array
console.log("for-in loop");
for(let i in marks){
    console.log(marks[i]);
}

//for of loop
console.log("for-of loop")
for(let i of marks){
    console.log(i);
}


//push
marks.push(90);
console.log("after push")
console.log(marks);

marks.pop();
console.log("after pop")
console.log(marks);

console.log("to string");
console.log(marks.toString());

console.log("concat");
console.log(marks.concat(grade));

console.log("unshift");
marks.unshift(99);
console.log(marks);

console.log("shift");
marks.shift();
console.log(marks);