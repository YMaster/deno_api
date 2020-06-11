import * as md5 from "https://deno.land/std/hash/md5.ts";
import * as sha1 from "https://deno.land/std/hash/sha1.ts";
import * as sha256 from "https://deno.land/std/hash/sha256.ts";
import * as sha3 from "https://deno.land/std/hash/sha3.ts";
import * as sha512 from "https://deno.land/std/hash/sha512.ts";

const md5Instance = new md5.Md5().update('中文')
console.log(md5Instance.toString())

const sha1Instance = new sha1.Sha1().update('中文')
console.log(sha1Instance.toString())

const sha3Instance = new sha3.Sha3_512().update('中文')
console.log(sha3Instance.toString())

const sha256Instance = new sha256.Sha256().update('中文')
console.log(sha256Instance.toString())
const key = "Hi There";
const hmac256 = new sha256.HmacSha256(key).update("中文");
console.log(hmac256.toString(), hmac256.hex(), hmac256.array(), hmac256.digest(), hmac256.arrayBuffer())

const sh512Instance = new sha512.Sha512().update('中文')
console.log(sh512Instance.toString())