// 也可以使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11; // Assigned expression type 11 is not assignable to type 10


// 可以用 ｜ 来链接多个类型(联合类型)
let b: "male" | "female";   // | 表示 or
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";


// any: 表示任意类型。一个变量设置为类型any，相当于该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d: any; // 显式的any， let: d; 隐式的写法
d = 10;
d = true;
d = "hello";


// unknown 表示未知类型
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;
// s = d;  // any类型赋值给字符串类型，不会报错，any会导致s的TS类型检测被关闭
e = "hello";

// unknown: 实际上就是一个类型安全的any，unknown类型的变量，不能直接赋值给其他类型
//s = e; // Assigned expression type unknown is not assignable to type string
if(typeof e === "string") {
    s = e;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法
    1. 变量 as 类型
    2. <类型>变量
 */
s = e as string;    // 类型断言
s = <string>e;


// void 和 never 常用来设置方法的返回值
function fn(num) {
    if(num > 0) {
        return true;
    } else {
        return 123;
    }
}

// void 表示空，以函数为例，表示没有返回值的函数
function fn1(): void {
    return null;
}

// never 表示没有值, 表示永远不会返回结果
function fn2(): never {
    throw new Error("报错了");
}

