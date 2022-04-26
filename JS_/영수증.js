const outwash = document.getElementById('outwash')
const inwash = document.getElementById('inwash')
const steamwash = document.getElementById('steamwash')
const reset = document.getElementById('reset')
const list = document.getElementById('list')
const total = document.getElementById('total')
let washcount = 1
let inwashcount = 1
let steamwashcount = 1
let sum = 0

outwash.addEventListener('click', () => {

  if(washcount === 0) {
    alert('같은 서비스를 연속으로 이용할 수 없습니다.')
    return;
  }

  washcount = 0
  inwash = 1
  steamwash = 1

  list.innerHTML += `<li>- ${outwash.dataset.price}</li>`
  sum += parseInt(outwash.dataset.price)
  total.innerText = `합계 : ${sum}`

})

inwash.addEventListener('click', () => {

  if(inwash === 0) {
    alert('같은 서비스를 연속으로 이용할 수 없습니다.')
    return;
  }

  washcount = 1
  inwash = 0
  steamwash = 1

  list.innerHTML += `<li>- ${inwash.dataset.price}</li>`
  sum += parseInt(inwash.dataset.price)
  total.innerText = `합계 : ${sum}`

})

steamwash.addEventListener('click', () => {

  if(steamwash === 0) {
    alert('같은 서비스를 연속으로 이용할 수 없습니다.')
    return;
  }

  washcount = 1
  inwash = 1
  steamwash = 0

  list.innerHTML += `<li>- ${steamwash.dataset.price}</li>`
  sum += parseInt(steamwash.dataset.price)
  total.innerText = `합계 : ${sum}`

})

reset.addEventListener('click', () => {

  list.innerHTML = ''
  sum = 0
  total.innerText = `합계 : ${sum}`

  washcount = 1
  inwash = 1
  steamwash = 1

})