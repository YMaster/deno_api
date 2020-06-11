import * as bytes from "https://deno.land/std/bytes/mod.ts";

/**
 * 寻找一个 Uint8Array 在另一个 Uint8Array 中的位置
 */
const u8a = new Uint8Array([1, 2, 3, 4, 5])
console.log(bytes.findIndex(u8a, new Uint8Array([3, 4])))

/**
 * 是否以某个 Uint8Array 最为前置
 */
console.log(bytes.hasPrefix(u8a, new Uint8Array([1, 2])))


/**
 * 是否以某个 Uint8Array 最为后置
 */
console.log(bytes.hasSuffix(u8a, new Uint8Array([4, 5])))

/**
 * 是否包含另一个 Uint8Array
 */
console.log(bytes.contains(u8a, new Uint8Array([2, 3])))

/**
 * 返回一个重复某个 Uint8Array 的新的 Uint8Array
 */
console.log(bytes.repeat(u8a, 2))
console.log(u8a)

/**
 * 返回一个新的拼接的 Uint8Array
 */
console.log(bytes.concat(u8a, new Uint8Array([9, 0])))
console.log(u8a)
