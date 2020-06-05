let timeout_timer = setTimeout(() => {
  console.log('setTimeout')
}, 2000);

console.log('before timeout')
new Promise((resolve, reject) => {
  setTimeout(() => {
    clearTimeout(timeout_timer)
  }, 1000)
})
