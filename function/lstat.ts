/**
 * 获取到指定路径的信息，如果是一个快捷方式的话则会返回快捷方式的信息而不是其指向的信息
 */

import { assert } from "https://deno.land/std/testing/asserts.ts"
const assertFn = async () => {
  const fileInfo = await Deno.lstat("files/read_write.txt");
  console.log('fileInfo: ', fileInfo)
  const pathInfo = await Deno.lstat('files/')
  console.log(pathInfo)
  assert(fileInfo.isFile);
}
// assertFn()

const fileInfo = Deno.lstatSync('files/read_write.txt')
const symLink = Deno.lstatSync('folder/targetFile.link.dat')
console.log(symLink)
assert(fileInfo.isFile)