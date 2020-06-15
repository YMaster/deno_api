import * as textproto from "https://deno.land/std/textproto/mod.ts";

const { TextProtoReader } = textproto;

// textproto.TextProtoReader

import { BufReader, StringReader } from "https://deno.land/std/io/mod.ts";
const input = "abcdefghijklmnopqrstuvwxyz\ndsfsfdsgdse";
const bufSize = 50;
const tp = new TextProtoReader(
  new BufReader(new StringReader(input), bufSize),
);

while (true) {
  const txt = await tp.readLine()
  if(!txt) {
    break
  } else {
    console.log(txt)
  }
}

// const file = Deno.openSync('files/read_write.txt')
// file.readSync
