//array = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
//remove the first company from the array
//remove uber and add ola in its place
// add amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
