window.onload= function() {
    clock();
}
function clock () {
    let today = new Date()
    let todayHour = today.getHours()
    let todayMin = today.getMinutes()
    let todaySec = today.getSeconds()
    const watchEl = document.getElementById("watch")
    
    watchEl.innerHTML = `${aphour(todayHour)}:${todayMin}:${todaySec}${ap(todayHour)}`
    window.setInterval('clock()',1000)

    function ap(h) {
        let ampm = Math.floor(h/12)
        if(ampm == 0) {
            return 'AM'
        }
        else {
            return 'PM'
        }
    }

    function aphour(h) {
        if(h > 12) {
            let a = 24 - h
            if(a > 9) {
                return 24 - h
            }
            else {
                return `0${24 - h}`
            }
        }
        else {
            return `0${h}`
        }
    }
}