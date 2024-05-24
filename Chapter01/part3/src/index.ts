import { hi } from "./m1";

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(123, 456));
console.log("hahaha")
console.log(hi);

const obj = {name: "Sun Wukong", age: 33};
console.log(obj);
obj.age = 18;
console.log(obj);

// console.log(Promise);

let fn = (a: number, b: number) => a + b;

fn(123, 456);
fn(22, 77);