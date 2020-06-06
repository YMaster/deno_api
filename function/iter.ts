/**
 * 将一个 Reader 转换成异步的迭代器
 * 第二个（非必传）参数可以控制 buffer 的大小，默认为 32kB
 */
// Deno.open('files/read_write.txt').then(async (res) => {
//   for await (let chunk of Deno.iter(res, { bufSize: 1024 })) {
//     console.log(chunk)
//   }
//   res.close()
// })

// 迭代器使用固定大小的内部缓冲区来提高效率；
// 它在每次迭代时都返回该缓冲区的视图。
// 因此，调用方有必要在需要时复制缓冲区的内容。
// 否则，下一次迭代将覆盖先前返回的块的内容。

let f = Deno.openSync('files/read_write.txt')
for (const chunk of Deno.iterSync(f)) {
  console.log(chunk)
}
f.close()