import * as path from 'https://deno.land/std/path/mod.ts'

/**
 * join
 * 拼接路径
 */
console.log(path.join(Deno.cwd(), 'files/folder'))
// console.log(path.isGlob(Deno.cwd()))
// console.log(path.normalize('https://deno.land/std/path'))


/**
 * normalize
 * 规范化为当前系统所有的格式
 */
console.log(path.normalize('~/abc/cde/efg.txt'))
// windows下： ~\abc\cde\efg.txt


/**
 * normalizeGlob
 * 和 normalize()一样，但当`globstar`为 true 时，不会折叠 "**\/.."。
 */
console.log(path.normalizeGlob('b\/abc\/efg', { globstar: true }))

/**
 * parse
 * 格式化 pathString 为 pathObject
 */
console.log(path.parse('~/abc/cde/fgh/ijk.txt'))
//  { root: "", dir: "~/abc/cde/fgh", base: "ijk.txt", ext: ".txt", name: "ijk" }

/**
 * resolve
 */
console.log(path.resolve(Deno.cwd(), './files/read_write.txt'))

/**
 * relative
 * 得到两个路径的相对路径，可用于动态的得到进行文件位置操作等，例如用于自定义安装路径后如何依然正确的读取指定的配置文件等
 */
console.log(path.relative('files', 'files/bar'))

/**
 * sep
 * 当前系统的路径分隔符
 */
console.log(path.sep)

/**
 * toNamespacedPath
 * 获取指定的路径的命名空间
 */
console.log(path.toNamespacedPath('files/bar'))

/**
 * win32.basename  获取文件路径中的文件名，如果传入 ext 的话结果会过滤掉 ext 部分
 * win32.delimiter 当前环境所用的分隔符
 * win32.fromFileUrl 获取指定 url 路径中文件或路径部分
 */
console.log(path.win32.basename('files/read_write.txt', '.txt'))  // read_write
// console.log(path.win32.basename('files/read_write.txt', 'txt'))  // read_write.
// console.log(path.win32.basename('files/read_write.txt'))  // read_write.txt

console.log(path.win32.delimiter)  // ;

console.log(path.win32.fromFileUrl('https://www.baidu.com/a/abc.txt'))
// console.log(path.win32.fromFileUrl('file:///home/foo/abc.txt'))
