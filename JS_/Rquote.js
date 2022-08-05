const quoteText = document.querySelector('.quote'),
    quoteBtn = document.querySelector('buttons'),
    authorname = document.querySelector('.name'),
    copyBtn = document.querySelector('.copy'),
    speechBtn = document.querySelector('.speech'),
    twitterBtn = document.querySelector('.twitter'),
    synth = speechSynthesis;
//quoteBtn, speechBtn, copyBtn, twitterBtn
//synth


function randomQuote(){
//http://api.quotable.io/random
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(result => {
        quoteText.innerText = result.context;
        authorname.innerText = result.author
        quoteBtn.classList.remove("loading")
        quoteBtn.innerText = "New Quote"
    })
}

speechBtn.addEventListener("click", ()=>{
// Web Speech API SpeechSynthesisUtterance
    if(!quoteBtn.classList.contains("loading")) {
        let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorname.innerText}`)
        synth.speak(utterence)
        setInterval(() => {
            synth.speaking? speechBtn.classList.add("active") : speechBtn.classList.remove("active")
        }, 10)
    }
//synth.speaking 이 참인동안 sppechBtn.classList.add("active")
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
})
//navigator.clipboard.writeText()


twitterBtn.addEventListener("click", () => {
    let tweeturl = `https://twitter.com/intent/tweet?url={${quoteText.innerText}}`
    window.open(tweeturl, "_blank")
})
//

quoteBtn.addEventListener("click", randomQuote)