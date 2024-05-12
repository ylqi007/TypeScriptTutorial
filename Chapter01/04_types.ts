// object表示一个js对象, 一般中开发中不使用
let a: object;
a = {};
a = function (){};


// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// 在属性名后加上？，表示可选属性
let b: {name: string, age?: number};  // 指定一个对象类型，并且对象应该包含什么属性
// b = {}; // Property 'name' is missing in type '{}' but required in type '{ name: string; }'. 需要指定b的那么属性
b = {name: "孙悟空", age: 18};

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: "猪八戒", age: 18, gender: "男"};


/* 设置函数结构的类型声明
    语法: (形参: 类型, 形参: 类型, 形参: 类型,...) => 返回值
 */
let d: (a: number, b: number) => number;
d = function (n1: number, n2: number): number {
    return n1 + n2;
}

// Assigned expression type (n1: number, n2: number, n3: number) => number is not assignable to type (a: number, b: number) => number
// d = function (n1: number, n2: number, n3: number): number {
//     return n1;
// }


// array, 数组的类型声明
// 1. 类型[]
// 2. Array<类型>
let e: string[];    // string[] 表示字符串数组
e = ['a', 'b', 'c']

let f: number[];
f = [1, 2, 3];
let g: Array<number>;   // 表述数值类型的数组
g = [1, 2, 3];


// tuple: 元组，也就是固定长度的数组。因为长度固定，所以效率会比array高一些
/**
 * 语法: [类型, 类型, 类型]
 */
let h: [string, string];
h = ["hello", "abc"];
// h = ["hello", "abc", "123"];    // Assigned expression type [string, string, string] is not assignable to type [string, string]

let h1: [string, number]

/** enum, 枚举
 *
 */
let i: {name: string, gender: string}
i = {
    name: "孙悟空",
    gender: "男"
}
console.log(i.gender === '男');

let ii: {name: string, gender: 0 | 1};  // 意义不明确

enum Gender {
    Male,
    Female
}
let iii: {name: string, gender: Gender}
iii = {
    name: "孙悟空",
    gender: Gender.Male
}
console.log(iii.gender === Gender.Male);


let j: string | number;
let jj: string & number;    // & 表示"且"，表示既是string，又是number，
let jjj: {name: string} & {age: number};

jjj = {
    name: "孙悟空",
    age: 18
}

// 类型别名
type myType = string;   // 然后可以用myType代替string
let m: myType;

type myType1 = 1 | 2 | 3 | 4 | 5;
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
let kk: myType1;
let ll: myType1;

