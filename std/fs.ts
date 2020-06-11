import {
  emptyDir, emptyDirSync,
  ensureDir, ensureDirSync,
  ensureFile, ensureFileSync,
  ensureSymlink, ensureSymlinkSync,
  format, detect, EOL,
  exists, existsSync,
  move, moveSync,
  copy, copySync,
  readJson, readJsonSync,
  writeJson, writeJsonSync,
  walk, walkSync,
  readFileStr, readFileStrSync,
  writeFileStr, writeFileStrSync,
} from 'https://deno.land/std/fs/mod.ts';

/**
 * 确保目录为空，如果包含内容则删除目录下内容，如果目录不存在则创建该目录
 */
emptyDir('./files/foo')
emptyDirSync('./files/foo')

/**
 * 确保目录存在，如果不存在就创建该目录，相当于 mkdir -p
 */
ensureDir('./files/foo')
ensureDirSync('./ensureDirSync')

/**
 * 确保文件存在，相对应的目录不存在则会创建这些目录，如果文件已经存在则不会做任何事
 */
ensureFile('./files/folder/targetFile.dat')   // returns promise
ensureFileSync('./files/folder/targetFile.dat')  // void

/**
 * 确保一个快捷方式的存在，如果不存在则会创建它
 */
ensureSymlink('./files/folder/targetFile.dat', './files/folder/targetFile.link.dat')
// ensureSymlinkSync('./files/folder/targetFile.dat', './files/folder/targetFile.link.dat')

/**
 * EOL、detect、format
 * 检测并格式化目标行尾字符的传递字符串。
 * 下面 detect 和 format 只有最后两个我打印可以看出来结果，其它的看不出来
 */
const CRLFinput = 'deno\r\nis not\r\nnode'
const Mixedinput = 'deno\nis not\r\nnode'
const LFinput = 'deno\nis not\nnode'
const NoNLinput = 'deno is not node'

detect(LFinput)     // output EOL.LF
detect(CRLFinput)   // output EOL.CRLF
detect(Mixedinput)  // output EOL.CRLF
detect(NoNLinput)   // output null

format(CRLFinput, EOL.LF)  // output "deno\nis not\nnode"

/**
 * exists、existsSync
 * 通过检查文件系统来测试给定路径是否存在
 */
exists('./files/foo').then((res: boolean) => console.log(res))   // returns promise
console.log(existsSync('./files/foo'))  // returns boolean

/**
 * move
 * 移动文件或目录，可以通过选项来选择是否覆盖
 */
// move('./files/foo', './files/bar')
// moveSync('./files/foo', './files/bar')
moveSync('./files/foo', './existingFolder', { overwrite: true }) // Will overwrite existingFolder

/**
 * copy、copySync
 * 复制文件或者目录，可以通过选项来选择是否覆盖
 */
copy('./files/bar', './files/foo')
copySync('./files/bar', './files/fooCopy')
copySync('./files/bar', './files/existingFolder', { overwrite: true })

/**
 * readJson
 * 读取一个 JSON 文件并且格式化为对象
 */
readJson('./files/foo.json').then((foo: any) => console.log(foo))
const foo = readJsonSync('./files/foo.json')
console.log(foo)

/**
 * writeJson、writeJsonSync
 * 将一个对象写入 JSON 文件
 * WriteJsonOptions：{
 *  replacer：string[] | number[]  // 一个string[] 或者 number[] 表示要格式化的列表
 *  space：number   // JSON 中的缩进所占空格数
 * }
 */
writeJson('./files/writeJson.json', { foo: 'bar' }, { spaces: 2 })
writeJsonSync('./files/writeJsonSync.json', { foo: 'bar sync' }, { replacer: ['foo'] })

/**
 * walk
 * 递归遍历目录中的所有文件
 */
for (const fileInfo of walkSync('./files')) {
  console.log(fileInfo.name)
}
async function printFilenames() {
  for await (const entry of walk('./files')) {
    console.log(entry.path)
  }
}
printFilenames().then(() => console.log('Done'))

/**
 * readFileStr
 * 将文件读取为字符串
 */
readFileStr('./files/read_write.txt', { encoding: 'utf-8' }).then((res: any) => console.log(res))
const fileStr = readFileStrSync('./files/read_write.txt', { encoding: 'utf-8' })
console.log('sync file str: ', fileStr)


/**
 * writeFileStr、writeFileStrSync
 * 将字符串写入文件
 */
writeFileStr('./files/read_write.txt', 'file write contents')
writeFileStrSync('./files/read_write.txt', 'file write contents sync')
