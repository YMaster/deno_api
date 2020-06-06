/**
 * 生成一个临时文件
 * 参数可以生成文件夹前缀等、后缀等
 * 返回或获取到文件的路径
 */
Deno.makeTempFile().then((tempFile) => {
  console.log(tempFile)
})

console.log(Deno.makeTempFileSync({ prefix: 'my_temp_', suffix: '_temp' }))