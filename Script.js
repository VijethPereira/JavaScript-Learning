console.log(window);
window.console.log("same a console.log()");
console.dir(document.head);
console.log(document.head);

//by ID
console.log(document.getElementById("heading"));

//by class
console.log(document.getElementsByClassName("cheading"));

//by tag
console.log(document.getElementsByTagName("title"));

//query selector
console.log(document.querySelector("h1"));

//all elemetsin NodeList
console.log(document.querySelectorAll("h1"));

//by class
console.log(document.querySelector(".cheading"));

//by id
console.log(document.querySelector("#heading"));