import { parse } from "https://deno.land/std/encoding/csv.ts"

const string = "a,b,c\nd,e,f\n#abcd";
console.log(
  await parse(string, {
    header: false,
    comment: '#',  // 注释字符
  })
);


import { encode, decode } from "https://deno.land/std/encoding/base32.ts"
/**
 * RFC4648 base32 的编解码
 * 通过 Uint8Array 做数据读写
 */
const b32Repr = "RC2E6GA="
const binaryData = decode(b32Repr)
console.log(binaryData)
console.log(encode(binaryData))
// Array.from(binaryData).forEach((it) => {
//   console.log(String.fromCodePoint(it))
// })

import { encode as b64encode, decode as b64decode } from 'https://deno.land/std/encoding/base64.ts'
/**
 * base64 注意，目前由于解码时数据缓存使用的是 Uint8Array 使得无法解码中文，只能解码英文字符与一些符号
 */
const str = 'hello world'
const b64 = b64encode(str)
console.log(b64)
console.dir(b64decode(b64))
