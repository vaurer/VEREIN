var userInputArray = [];
var itemScreen = null;
var problemString;
//var x = eval(problemString);
function writeValue(value) {
  userInputArray.push(value);
  console.log("Value: " + value);
  console.log("Array: " + userInputArray);
  calculateProblemString();
  console.log("String: " + problemString);
  displayItemScreen();
}
function displayItemScreen() {
  document.getElementById("itemScreen").innerHTML = problemString;
  console.log(userInputArray.join(""));
}

function deleteScreen() {
  userInputArray.length = 0  //Array erase
  calculateProblemString();
  document.getElementById("itemScreen").innerHTML = problemString;
}

function calculateProblemString (){
  console.log(userInputArray);
  problemString = userInputArray.join("");
  return problemString;
}
function calculate() {
  document.getElementById("itemScreen").innerHTML = eval(problemString);
  //displayItemScreen();
}