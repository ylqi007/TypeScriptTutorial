(function () {
    // 类型声明，描述一个对象的类型
    type myType = {
        name: string;
        age: number;
    }

    // type myType = {}

    const obj: myType = {
        name: 'abc',
        age: 11
    }

    /**
     * 接口用来定义一个类/对象的结构
     *  用类定义一个类中应该包含哪些属性和方法
     *  同时接口也可以当作类型声明使用
     * 接口可以在定义类的时候限制类的结构，有点像抽象类
     */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string;
    }

    const obj1: myInterface = {
        name: 'abc',
        age: 11,
        gender: 'male'
    }

    /**
     * 接口可以在定义类的时候去限制类的结构。
     *  接口中的所有的属性都不能有实际的值。
     *  接口只定义对象的结构，而不考虑实际值。
     *  在接口中所有的方法都是抽象方法。
     */
    interface myInter {
        name: string;

        sayHello(): void;
    }

    /**
     * 定义一个类实现一个接口
     */
    class MyClass implements myInter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
            console.log('MyClass is barking');
        }
    }

})();