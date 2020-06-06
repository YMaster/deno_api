// function Deno.inspect(value: unknown, options?: InspectOptions): string

/**
 * 将数据格式化为 console.log 打印所用的字符串
 */
const obj: any = {}
obj.propA = 10
obj.propB = 'hello'
const objAsString = Deno.inspect(obj)
console.log(objAsString)