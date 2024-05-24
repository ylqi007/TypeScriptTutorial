(function () {
    /*
    以abstract开头的类是抽象类，抽象类和其他类的区别不大，只是不能被用类创建对象。
    抽象类是专门用来被继承的类。
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 抽象方法使用abstract开头，没有方法体，定义在父类中，子类必须对抽象类进行重写。
        abstract sayHello(): void;
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