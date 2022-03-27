let num1 = 8
let num2 = 2
let result = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    result = num1 + num2;
    document.getElementById("res").innerText = result;
    result = 0
}
function sub() {
    result = num1 - num2;
    document.getElementById("res").innerText = result;
    result = 0
}
function div() {
    result = num1 * num2;
    document.getElementById("res").innerText = result;
    result = 0
}
function mul() {
    result = num1 / num2;
    document.getElementById("res").innerText = result;
    result = 0
}