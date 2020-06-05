setTimeout(() => {
  console.log('task code')
})

queueMicrotask(() => {
  console.log('micro task code1')
})
queueMicrotask(() => {
  console.log('micro task code2')
})

console.log('static code')