"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName(): string {
        //     return this._name;
        // }
        //
        // setName(value: string) {
        //     this._name = value;
        // }
        //
        // getAge(): number {
        //     return this._age;
        // }
        //
        // setAge(value: number) {
        //     if(value >= 0) {
        //         this._age = value;
        //     }
        // }
        // TS中设置getter/setter方法的方式
        get name() {
            console.log('get name()执行了。。。');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const person = new Person('Wukong', 18);
    console.log(person);
    /**
     * 现在的属性是直接在对象中设置，属性可以任意的被修改
     *  属性可以被任意修改，会导致对象中国呢的数据变得非常不安全
     */
    // person.name = '猪八戒';
    // person.age = 15;
    // person.setName('猪八级');
    // person.setAge(15);
    person.name = '猪八戒。。。';
    person.age = -33;
    console.log(person.name);
    console.log(person);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    // class C {
    //     num: number;
    //     name: string;
    //
    //     constructor(num: number, name: string) {
    //         this.num = num;
    //         this.name = name;
    //     }
    // }
    // 语法糖
    class C {
        // 可以直接将属性定义在构造器中
        constructor(num, name) {
            this.num = num;
            this.name = name;
        }
    }
    const c = new C(123, 'Ccc');
})();
