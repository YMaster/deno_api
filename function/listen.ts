/**
 * 监听本地端口
 */
const listen1 = Deno.listen({ port: 12345 })
listen1.accept().then((value) => {
  console.log(value)
  const p = new Uint8Array([1, 2, 3, 4])
  value.write(p)
  listen1.close()
})


/**
 * 监听本地 TLS 协议的端口 
 */
// const lstnr = Deno.listenTls({ port: 443, certFile: 'server.crt', keyFile: 'server.key' })
// 请在具有 crt 和 key 的环境运行