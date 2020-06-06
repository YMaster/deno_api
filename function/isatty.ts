const nonTTyRid = Deno.openSync('files/read_write.txt').rid
const ttyRid = Deno.openSync('/dev/tty6').rid  // windows 下没有该文件

console.log(Deno.isatty(nonTTyRid))
console.log(Deno.isatty(ttyRid))

Deno.close(nonTTyRid)
Deno.close(ttyRid)
