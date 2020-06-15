import * as mime from "https://deno.land/std/mime/mod.ts";
import * as io from "https://deno.land/std/io/mod.ts";

const multipartReader = new mime.MultipartReader(
  Deno.openSync("files/read_write.txt"),
  "demo",
);
console.log(multipartReader)

// const u8a = new Uint8Array(10)
// const writer = new io.StringWriter('abcde')
// await writer.write(u8a)
// const multipartWriter = new mime.MultipartWriter(writer, 'demo')
// Deno.writeFileSync('files/mime_write.txt', u8a, { append: true })
// console.log(multipartWriter)
