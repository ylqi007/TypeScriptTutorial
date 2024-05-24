(function () {
    // 定义一个Animal 类
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫。。。");
        }
    }
    // 定义一个表示狗的类
    // 使Dog类继承Animal，使用继承，子类将会继承所有父类的属性和方法
    // 通过继承，可以将多个类中共有的代码写入到父类中
    // 如果在子类中添加了和父类相同的方法，则子类中的方法会覆盖父类的方法: 方法重写(Override)
    class Dog extends Animal {

        sayHello() {
            console.log("汪汪汪!");
        }

        run() {
            console.log(`${this.name} is running...`);
        }
    }

    // 定义一个表示猫的类
    class Cat extends Animal {

        sayHello() {
            console.log('miaomiao');
        }
    }

    const dog = new Dog('旺财', 3);
    const cat = new Cat('咪咪', 3);

    console.log(dog);
    dog.sayHello();
    dog.run();

    console.log(cat);
    cat.sayHello();
})();