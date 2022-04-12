document.getElementById('button').addEventListener('click', () => {
    let nums = new Array()
    let color = ''
    for(let i = 0; i < 6; i++) {
      nums.push(Math.floor(Math.random() * 15).toString(16))
    }
    for(let i = 0; i < 6; i++) {
      color += nums[i]
    }
    document.body.style.backgroundColor = `#${color}`
    document.getElementById('text').innerHTML = `#${color}`
  })