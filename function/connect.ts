// Connects to the hostname (default is "127.0.0.1") and port on the named transport (default is "tcp"), and resolves to the connection (Conn).
const doConnect = async () => {
  const const1 = await Deno.connect({ port: 1994 })
  console.log(const1)
  const const2 = await Deno.connect({ hostname: '127.0.0.1', port: 1994 })
  console.log(const2)
  const const3 = await Deno.connect({ hostname: '[2001:db8::1]', port: 1994 })
  console.log(const3)
  const const4 = await Deno.connect({ hostname: 'golang.org', port: 1994, transport: 'tcp' })
  console.log(const4)
}

doConnect()
// error: Uncaught ConnectionRefused: 由于目标计算机积极拒绝，无法连接。 (os error 10061)
