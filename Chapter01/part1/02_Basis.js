var a; // 声明一个变量a，同时指定它的类型为number
a = 10; // a类型为number，在以后的使用过程中a只能是数字
a = 22;
// a = 'hello'; // 此行代码会报错，因为变量a的类型为number，不能赋值字符串。 TS2322: Type string is not assignable to type number
var b;
b = 'Hello';
// 如果变量的声明和赋值是同时进行的，TS可以自动堆变量进行类型检测
var c = true; // 声明变量c后直接进行赋值，TS自动检测出c的类型为boolean
c = false;
// c = 'string';   // TS2322: Type string is not assignable to type boolean
// JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); // 579
console.log(sum(123, '456')); // 123456
// 参数的类型声明
// function sum(a: number, b: number) {
//     return a + b;
// }
// console.log(sum(123, 456));
// console.log(sum(123, 456, 789)); // Invalid number of arguments, expected 2
// console.log(sum(123, '4567')); // Argument type "456" is not assignable to parameter type number
// 返回值类型声明
// function sum1(a: number, b: number): number {
//     return a + b;
// }
//
// let result = sum1(12,3);
