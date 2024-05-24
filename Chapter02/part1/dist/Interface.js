"use strict";
(function () {
    // type myType = {}
    const obj = {
        name: 'abc',
        age: 11
    };
    const obj1 = {
        name: 'abc',
        age: 11,
        gender: 'male'
    };
    /**
     * 定义一个类实现一个接口
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('MyClass is barking');
        }
    }
})();
