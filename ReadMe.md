# TypeScript
TS --(编译)--> JS --> 然后交由JS解析器执行(JS解析器就是Node.js写的)

## 1. 开发环境搭建
### 1. 下载安装Node.js
* 安装LTS版本
* Node.js is an open-source and cross-platform JavaScript runtime environment. Node.js是JavaScript的运行时环境。
* 然后在Terminal中运行`node -v`，如果正常输出版本号就说明安装成功了。
* Node.js的安装就是为了可以使用tsc编译器
* Node.js中有个npm (Node Package Manager)

### 2. 安装TS解析器
* 在Terminal中输入`npm i -g typescript` (全局安装TypeScript)
* 在Terminal中输入`tsc`验证TypeScript是否安装成功。

### 3. 创建并编译ts文件
1. 创建`01_HelloTS.ts`文件
2. 使用`tsc 01_HelloTS.ts`命令进行编译。

### Reference
* https://nodejs.org/en
* https://nodejs.org/en/download/package-manager
* https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
* https://www.npmjs.com/
* `npm install`: https://docs.npmjs.com/cli/v10/commands/npm-install


## 2. TS的类型声明
### 2.1 类型声明
* 类型声明是TS非常重要的一个特点
* 通过类型声明可以指定TS中变量(参数、形参)的类型
* 指定类型后，当为变量赋值的时候，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错。
* 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值。
* 语法
  ```typescript
  let 变量: 类型;
  let 变量: 类型 = 值;
  function fn(参数: 类型, 参数: 类型): 类型 {
    ...
  }
  ```
* 自动类型判断
  * TS拥有自动的类型判断机制。
  * 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型。
  * 所以如果变量的声明和赋值是同时进行的，可以省略掉类型声明。
  * 类型:

  | 类型      | 例子             | 描述                     |
  | ------- | -------------- |------------------------|
  | number  | 1,-33, 2.5     | 任意数字                   |
  | string  | hi', "hi", hi  | 任意字符串                  |
  | boolean | true、false     | 布尔值true或false          |
  | 字面量     | 其本身            | 限制变量的值就是该字面量的值，可以为联合类型 |
  | any     | \*             | 任意类型                   |
  | unknown | \*             | 类型安全的any               |
  | void    | 空值(undefined)  | 没有值(或undefined)        |## npm
  | never   | 没有值            | 不能是任何值                 |### Install Packages
  | object  | {name:'kaimo'} | 任意的JS对象                |```shell
  | array   | [1,2,3]        | 任意JS数组                 |npm install --save-dev less less-loader css-loader style-loader
  | tuple   | [4.5]          | 元素，TS新增类型，固定长度数组       |```
  | enum    | enum{A, B}     | 枚举，TS中新增类型             | 

### Reference
* https://www.tslang.cn/docs/handbook/basic-types.html


## Reference
* [一份不可多得的 TS 学习指南（1.8W字）](https://juejin.cn/post/6872111128135073806)