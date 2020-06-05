// AbortSignal 接口表示一个信号对象（ signal object ），它允许您通过 AbortController 对象与DOM请求（如Fetch）进行通信并在需要时将其中止。

const controller = new AbortController()
const signal = controller.signal

const getData = () => {
  console.log('fetch start')
  fetch(`url`, { signal }).then((res) => {
    return res.text()
  }).then((txt) => {
    console.log(txt)
  }).catch((err) => {
    console.warn(err)
  })
}
const abort = () => {
  controller.abort()
  console.log('abort')
}

getData()
abort()
// console.log('运行测试的话找一个访问比较慢的连接测试')