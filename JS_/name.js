let Number = '20210513'
let name = '조성호'
let myPoints = 0;

console.log(`Name : ${name} , Number : ${Number}`)

let name1 = "Seongho"
let greeting = "Hi there";

function hello() {
    document.getElementById('hi').innerText = `${greeting}, ${name1}!`;
}

function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();