class Dog {
    private name: string;
    private age: number;

    // 构造函数
    constructor(name: string, age: number) {
        // 在构造函数中，当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;   // this就表示当前实例
        this.age = age;
    }

    bark() {
        console.log(this);  // 在方法中可以通过this表示当前调用方法的对象
        // alert('汪汪汪！');
    }
}

const dog1 = new Dog('旺财', 17);
const dog2 = new Dog('小白', 18);
const dog3 = new Dog('小黑', 19);
const dog4 = new Dog('旺财', 20);

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);

dog1.bark();