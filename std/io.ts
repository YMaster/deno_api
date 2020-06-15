import * as io from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

/**
 * readLines
 * 逐行读取文件
 */
const filename_readlines = path.join(Deno.cwd(), 'README.md')
const fileReader_readlines = Deno.openSync(filename_readlines, { read: true })
for await (let line of io.readLines(fileReader_readlines)) {
  console.log(line)
}

/**
 * readStringDelim
 * 读取一行后按指定分隔符分割成多行
 */
// const filename_stringdelim = path.join(Deno.cwd(), 'README.md')
// const fileReader_stringdelim = Deno.openSync(filename_stringdelim, { read: true })
// for await (let line of io.readStringDelim(fileReader_stringdelim, ' ')) {
//   console.log(line)
// }

/**
 * StringReader
 * 将最大为 Uint8Array 长度的字节读取到  Uint8Array 中，对应的生育
 */
const u8a = new Uint8Array(4)
const r = new io.StringReader('abcdef')
const res0 = await r.read(u8a)
const u8a1 = new Uint8Array(4)
const res1 = await r.read(u8a1)
console.log(res0); // 4
console.log(res1); // 2 如果没有剩余自负了会是： null, no byte left to read. EOL
console.log(new TextDecoder().decode(u8a)); // abcd
console.log(new TextDecoder().decode(u8a1)); // ef


/**
 * StringWriter
 * copyN(r: Deno.Reader, dest: Deno.Writer, size: number)
 * 从 rader 中读取 size 个字符写入到 writer 中
 */
// const w = new io.StringWriter('base')
// const r = new io.StringReader('0123456789')
// await io.copyN(r, w, 3)

// console.log(w.toString())
// await Deno.copy(r, w)
// console.log(w.toString())