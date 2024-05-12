// object表示一个js对象, 一般中开发中不使用
var a;
a = {};
a = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// 在属性名后加上？，表示可选属性
var b; // 指定一个对象类型，并且对象应该包含什么属性
// b = {}; // Property 'name' is missing in type '{}' but required in type '{ name: string; }'. 需要指定b的那么属性
b = { name: "孙悟空", age: 18 };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: "猪八戒", age: 18, gender: "男" };
/* 设置函数结构的类型声明
    语法: (形参: 类型, 形参: 类型, 形参: 类型,...) => 返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
// Assigned expression type (n1: number, n2: number, n3: number) => number is not assignable to type (a: number, b: number) => number
// d = function (n1: number, n2: number, n3: number): number {
//     return n1;
// }
// array, 数组的类型声明
// 1. 类型[]
// 2. Array<类型>
var e; // string[] 表示字符串数组
e = ['a', 'b', 'c'];
var f;
f = [1, 2, 3];
var g; // 表述数值类型的数组
g = [1, 2, 3];
// tuple: 元组，也就是固定长度的数组。因为长度固定，所以效率会比array高一些
/**
 * 语法: [类型, 类型, 类型]
 */
var h;
h = ["hello", "abc"];
// h = ["hello", "abc", "123"];    // Assigned expression type [string, string, string] is not assignable to type [string, string]
var h1;
/** enum, 枚举
 *
 */
var i;
i = {
    name: "孙悟空",
    gender: "男"
};
console.log(i.gender === '男');
var ii; // 意义不明确
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var iii;
iii = {
    name: "孙悟空",
    gender: Gender.Male
};
console.log(iii.gender === Gender.Male);
