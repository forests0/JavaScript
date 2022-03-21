
let man = 10;
let woman = 6;
let ratio;
let count = 0;
if(man < woman) {
    ratio = woman / man;
}
else {
    ratio = man / woman;
}


function increase() {
    document.getElementById("count-el").innerText = count;
    count++;
}

function history() {
    document.getElementById("save").innerText += `${count - 1}` + "-";
    count = 0;
}

