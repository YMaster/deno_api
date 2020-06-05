const eventFun = (e: Event) => {
  console.log(e)
}
addEventListener('cusEvent', eventFun, { once: true })

const cusEvent = new Event('cusEvent', {
  bubbles: true,
  cancelable: true,
  composed: true,
})


console.log('第一次调用 event 开始')
dispatchEvent(cusEvent)
console.log('第一次调用 event 结束')

removeEventListener('cusEvent', eventFun)

console.log('第二次调用 event 开始')
dispatchEvent(cusEvent)
console.log('第二次调用 event 结束')