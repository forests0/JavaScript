let vals 


function inch() {
    vals = document.getElementById('values').value
    document.getElementById("output").innerText = `${vals}cm = ${Math.floor(vals / 2.54)}in`
}
function ft() {
    vals = document.getElementById('values').value
    document.getElementById("output").innerText = `${vals}cm = ${Math.floor(vals / 30.48)}ft`
}
function yard() {
    vals = document.getElementById('values').value
    document.getElementById("output").innerText = `${vals}cm = ${Math.floor(vals / 91.44)}yd`
}
function mile() {
    vals = document.getElementById('values').value
    document.getElementById("output").innerText = `${vals}cm = ${Math.floor(vals / 160934)}mile = ${Math.floor(vals / 160934) * 1.6}km`
}

