/**
 * 生成一个临时文件夹
 * 参数可以指定文件夹前缀、后缀的参数
 * 返回或获取到文件夹的路径
 */
Deno.makeTempDir().then((tempDir) => {
  console.log(tempDir)
})

Deno.makeTempDir({ prefix: 'my_temp' }).then((tempDir) => {
  console.log(tempDir)
})


console.log(Deno.makeTempDirSync())
console.log(Deno.makeTempDirSync({ prefix: 'sync_temp' }))