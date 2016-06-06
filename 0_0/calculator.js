const num1 = document.getElementsByName('num1')[0];
const operator = document.getElementsByName('op')[0];
const num2 = document.getElementsByName('num2')[0];
const sum = document.getElementById('sum');

num1.addEventListener("keyup", doMath);
num2.addEventListener("keyup", doMath);
operator.addEventListener("keyup", doMath);

function doMath() {
  var first = num1.value;
  var second = num2.value;
  var op = operator.value;
  var solution;
  if (op === "+") {
    solution = parseFloat(first) + parseFloat(second);
  } else if (op === "-") {
    solution = parseFloat(first) - parseFloat(second);
  } else if (op === "*") {
    solution = parseFloat(first) * parseFloat(second);
  } else {  // Without error-handling, only option left should be division
    solution = parseFloat(first) / parseFloat(second);
  } sum.innerHTML = "Solution: " + solution;
}
