import * as datetime from "https://deno.land/std/datetime/mod.ts";

/**
 * currentDayOfYear()
 * 获取今天是一年之中的第多少天
 */
console.log(datetime.currentDayOfYear())

/**
 * dayOfYear
 * 一个日期在这个日期所在年份中第多少天
 */
console.log(datetime.dayOfYear(new Date('2020-06-01')))

/**
 * 转换为 GMT 格式
 */
console.log(datetime.toIMF(new Date()))

/**
 * 格式化日期
 */
// TODO 会报错，暂不清楚 dateStr 需要具体什么样的 string
// console.log(datetime.parseDate(new Date().toString(), 'mm-dd-yyyy'))


// TODO 报错，与上面一致，暂不清楚 datetimeStr 格式
console.log(datetime.parseDateTime(new Date().toString(), 'dd-mm-yyyy hh:mm'))