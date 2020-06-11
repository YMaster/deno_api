import * as flager from "https://deno.land/std/flags/mod.ts";

/**
 * 格式化命令参数
 * deno run flags.ts -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
 */
const { args } = Deno
console.log(flager.parse(args))
// { _: [ "foo", "bar", "baz" ], x: 3, y: 4, n: 5, a: true, b: true, c: true, beep: "boop" }