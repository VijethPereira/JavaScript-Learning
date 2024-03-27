//create h2 element with text "hello javaScritp". and append "from youtube" to the setence.

let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + "from youtube"


//create 3 div with common class = box. access them and add unique text to each of them.

let divs = document.querySelectorAll(".box");
divs[0].innerText = "value 1";
divs[1].innerText = "value 2";
divs[2].innerText = "value 3";

