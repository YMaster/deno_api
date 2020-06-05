fetch('https://www.baidu.com').then((res) => {
  return res.text()
}).then((text) => {
  console.log(text)
})

// need --allow-net flag
// deno run --allow-net .\function\fetch.ts