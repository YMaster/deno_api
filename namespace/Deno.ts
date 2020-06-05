/**
 * chdir
 * cd 命令，changeDirector，默认根据当前项目根目录来计算
 */
Deno.chdir('./namespace')
const dir = Array.from(Deno.readDirSync('./'))
console.log(dir)

/**
 * chmod
 * 设置文件或者目录权限（异步）
 */
Deno.chdir('../')
const setMode = async () => {
  await Deno.chmod('./files/read_write.txt', 0o777);
  console.log('setMode finish')
}
// setMode()
// 目前权限设置会失败，我也不知道为啥，我的运行平台为 win10 202003版

/**
 * chmodSymc
 * 设置文件或者目录权限（同步）
 */
const setModeSync = () => {
  Deno.chmodSync('./files/read_write.txt', 0o666)
  console.log('setMode finish')
}
// setModeSync()
// 目前权限设置会失败，我也不知道为啥，我的运行平台为 win10 202003版


/**
 * chown
 * 对指定文件授权
 */
// const doChown = async () => {
//   Deno.chown('./files/read_write.txt', )
// }

/**
 * FileInfo
 * 
 */

/**
 * env
 */
Deno.env.set('start_type', 'deno')
console.log(Deno.env.get('start_type'))

/**
 * pid
 * process id
 */
console.log('Deno.pid: ', Deno.pid)

/**
 * version
 */
console.log('Deno.version: ', Deno.version)