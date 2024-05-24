"use strict";
(function () {
    /*
    以abstract开头的类是抽象类，抽象类和其他类的区别不大，只是不能被用类创建对象。
    抽象类是专门用来被继承的类。
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    // let animal = new Animal('animal');
})();
