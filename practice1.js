//find the averager marks of student => [85, 97, 44, 37, 76, 60]

let marks = [85, 97, 44, 37, 76, 60];
let averager = 0, sum = 0;

for(ele of marks){
    sum += ele;
}
averager = sum/(marks.length);
console.log(`average = ${averager}`);
