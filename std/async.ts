import * as async from 'https://deno.land/std/async/mod.ts'

/**
 * delay
 * 延迟指定时间，返回的是一个 promise，所以最好在 async 函数中通过 await 来使用
 */
const delayDelayFn = async () => {
  console.log('start delay')
  await async.delay(2000)
  console.log('end delay')
}
delayDelayFn()

/**
 * 返回一个 promise
 * 这个 promise 的 resolve 和 reject 被绑定到返回的 promise 上了
 * 这个 promise 的 resolve 和 reject 需要手动触发
 */
const promise_test_resolve = async.deferred()
promise_test_resolve.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
promise_test_resolve.resolve('resolve')

const promise_test_reject = async.deferred()
promise_test_reject.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
promise_test_reject.reject('reject')


/**
 * class MuxAsyncIterator
 * 通过 add 添加异步迭代器
 * 将多个异步迭代器合并为一个流式迭代器
 * 目前没有直接生成异步迭代器的方法，所以暂时不好编写示例
 */
const muxAsyncIterator = new async.MuxAsyncIterator()
// function* generator1() {
//   yield 2;
// }
// function* generator2() {
//   yield 2;
// }
// function* generator3() {
//   yield 3;
// }
// muxAsyncIterator.add()
