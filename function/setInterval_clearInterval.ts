let index = 0
let timeinterval_timer = setInterval(() => {
  console.log(`setInterval ${++index}`)
  if (index >= 10) {
    clearInterval(timeinterval_timer)
  }
}, 1000)