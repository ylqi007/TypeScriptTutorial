(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        // public: 可以在任意位置访问，修改，这是默认的修饰符
        // private: 私有属性只能在类的内部修改
        //  可以通过getter/setter方法，使私有属性被访问到。
        // protected: 受保护的属性，只能在当前类和当前类的子类中被访问。
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
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
        get name(): string {
            console.log('get name()执行了。。。');
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            if(value >= 0) {
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
        protected num: number;

        constructor(num: number) {
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
        constructor(public num: number, public name: string) { }
    }

    const c = new C(123, 'Ccc');

})();