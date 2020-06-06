const request = async () => {
  const url = Deno.args[0]
  const res = await fetch(url)
  const body = new Uint8Array(await res.arrayBuffer())
  await Deno.stdout.write(body)
}

// request()

/**
 * TCP server
 */
const listenFn = async () => {
  const hostname = '0.0.0.0'
  const port = 8000
  const listener = Deno.listen({ hostname, port })
  console.log(`Listening on ${hostname}:${port}`)
  // for await(const conn of listener) {
  //   Deno.copy(conn, conn)
  // }
  listener.accept().then((conn) => {
    console.log(conn)
    Deno.copy(conn, conn)
  })
}
listenFn()
