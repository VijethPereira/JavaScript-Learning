//function takes a string and returns the number of vowles.
let res = 0;
function count(val) {
  for (ele of val) {
    if (ele == "a" || ele == "e" || ele == "i" || ele == "o" || ele == "u") {
      res += 1;
    }
  }
  return res;
}

console.log(count("aeiouwf"));

//using arrow
res = 0;
const countArrow = (val) => {
  for (ele of val) {
    if (ele == "a" || ele == "e" || ele == "i" || ele == "o" || ele == "u") {
      res += 1;
    }
  }
  return res;
};

console.log(countArrow("aeiouwf"));
