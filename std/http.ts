import * as http from "https://deno.land/std/http/mod.ts";

/**
 * serve
 */
// const server = serve({ port: 8000 });
// for await (const req of server) {
//   req.respond({ body: "hello derve!" });
// }

/**
 * listenAndServe
 */
const options = { port: 8000 };
// http.listenAndServe(options, (req) => {
//   if (req.url === '/favicon.ico') {
//     req.respond({ status: 401 })
//   } else {
//     const cookie_test: http.Cookie = { name: "acookie", value: "cookie contents for a" };
//     const response: http.Response = { body: "hellow listenAndServe!" }
//     const cookies = http.getCookies(req)
//     console.log(cookies)
//     http.setCookie(response, cookie_test);
//     http.setCookie(response, { name: 'bcookie', value: 'cookie contents for b' });
//     // delCookie(response, cookie_test.name);
//     // console.log('response: ', response)
//     // console.log(req)
//     req.respond(response);
//   }
// });


/**
 * http.STATUS_TEXT
 * 所有 http status 及简要说明
 */
console.log(http.STATUS_TEXT)
// const encoder = new TextEncoder()
// console.log(http.STATUS_TEXT.entries().next())
// const data = encoder.encode(http.STATUS_TEXT.entries().next().value.toString())
// Deno.writeFileSync('files/http_status.txt', data)