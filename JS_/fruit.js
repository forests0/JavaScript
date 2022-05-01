let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

for(let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
        appleShelf.textContent += "🍎"
    }
    if (fruit[i] === "🍊") {
        orangeShelf.textContent += "🍊"
    }
}