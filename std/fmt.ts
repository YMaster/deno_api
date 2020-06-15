import { sprintf, printf } from "https://deno.land/std/fmt/printf.ts";

// doc  https://deno.land/std/fmt

/**
 * 格式化输出
 * 
 */
const str = sprintf("Hello %s, hello %s", "World", "Rust"); // 嵌入字符串
console.log("str: ", str);

// 浮点型
printf("\n%f", 3.0);

// 指定宽度和小数长度
printf("\n%10.3f", 2);
// - 左对齐
printf("\n%-10.3f", 2);

// 科学计数法
printf("\n%e", 0.1 + 0.3);

// 将参数转化为布尔值，打印 true 或者 false，（但目前好像有bug？不能转换，当前版本 1.0.5）
printf("\n%t", false);

// 识别为数字，打印其二进制
printf("\n%b", "12.5");

// 打印字符的编码对应的字符，但是与浏览器表现不一致
printf("\n%c", 37812);

// 以 8 进制打印
printf("\n%o", 20);

// 以 16 进制打印
printf("\n%x", 20);

// 十进制
printf("\n%d", 20);

// 打印其数据的 typeof 类型
printf("\n%T", 20);

// 插值打印
printf("\n%s %s", 'hello ', 'rust');

// 打印 JSON.stringify() 返回值
printf("\n%j", JSON.stringify({a: 'abc'}));

// 采用默认格式打印
printf("\n%v", JSON.stringify({a: 'abc'}));

// 可以自行指定参数位置
printf("\n%[2]d.%[1]d", 1, 2)

// 还可以这样用
printf("\n%[2]*.[1]*d", 1, 5)
// 相当于
printf("\n%5.1d", 5)
printf("\n%5d", 5)