let Fcard = Random1()
let Scard = Random1()
let cards = [Fcard, Scard]
let sum = Fcard + Scard;
let hasb = false
let ita = false
let msg
let msgel = document.getElementById("wnt");
let cardel = document.getElementById('card')
console.log(msg)

let player = {
    name : 'person',
    chip : 500,
}

let playerel = document.getElementById("playerel")
playerel.textContent = player.name + " : $" + player.chip;

function StartGame() {
    ita = true
    RenderGame();
}

function Random1() {
    let radnum = Math.floor(Math.random() * 13) + 1;
    if (radnum === 1) return 11;
    else if (radnum > 10) return 10;
    else return radnum
}

function RenderGame() {
    document.getElementById('sum').innerText = `Sum : ${sum}`;
    cardel.textContent = `Cards : `;
    for (let i = 0; i < cards.length; i++) {
        cardel.textContent += `${cards[i]}, `
    }
    if (sum < 21) {
        msg = "카드를 더 뽑으시겠습니까?"
    }
    else if (sum == 21) {
        msg = "BlackJack!"
        hasb = true
    }
    else {
        msg = "BUST"
        ita = false
    }
    msgel.textContent = msg;

}

function NewCard() {
    if (ita === true && hasb === false) {
        let newcard = Random1()
        sum += newcard
        cards.push(newcard)
        RenderGame()
    }
}