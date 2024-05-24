"use strict";
function fn(a) {
    return a + 1;
}
/**
 * 在定义函数或是类的时候，如果遇到类型不明确就可以使用范型
 */
function fn1(a) {
    return a;
}
// 可以直接调用有范性的函数
console.log(fn1(10)); // 不指定范型，TS可以自动对类型进行推断
console.log(fn1('hello')); // 当类型复杂，TS无法推断时，可以指定范型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
// T extends Inter，表示范型T必须是Inter的实现类(子类)
function fn3(a, b) {
    return a;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
