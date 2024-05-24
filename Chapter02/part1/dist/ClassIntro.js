"use strict";
/* 使用class关键字定义一个类
 * 类中主要包含两个部分: 属性 & 方法
 *  1. 属性
 *      * 实例属性: 直接定义的属性，需要通过实例对象访问
 *      * 类属性: 使用static修饰的属性，可以直接通过类方法
 *
 *      * readonly: 只读属性
 *      * static readonly: 只读静态属性
 *  2. 方法
 *      *
 */
class Person {
    constructor() {
        // 1. 定义实例属性
        this.name = '孙悟空';
        this.age = 18;
    }
    // 2. 方法
    sayHello() {
        console.log("Hello everyone!");
    }
    static sayHelloStatic() {
        console.log("Person: Hello everyone!");
    }
}
// 1.2 定义静态属性/类属性
Person.specie = 'Monkey';
const per = new Person();
console.log(per);
console.log(Person.specie);
// per.name = 'Tom';   // Attempt to assign to const or readonly variable
// console.log(per.name);
per.sayHello();
Person.sayHelloStatic();
