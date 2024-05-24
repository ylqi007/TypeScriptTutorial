(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('Animal is barking');
        }
    }

    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            // 如果在子类中写了构造函数，在子类构造函数中必须调用父类的构造函数
            super(name);    // 调用父类的构造器
            this.age = age;
        }

        sayHello() {
            // 在类的方法中，super表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪');
        }
    }

    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();