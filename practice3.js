//prompt user to enter full name. Generate a username for them based on the input.
//start username with @ followed by their full naem and ending with name length.
//remove the other script from html

let name = prompt("enter your full name");
name = name.replace(" ","");
let uname = `@${name}${name.length}`;
console.log(uname);