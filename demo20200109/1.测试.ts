// Null Undefined 是所有类型的子类型
// let u: undefined = undefined;
// let n: null = null;
// let num: number = null

// 任意值
// let anyThing: any = 'hello';
// console.log(anyThing.myName.firstName); // 不会报错 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

// 联合类型
// function getLength(something: string | number): number{
//   return something.length; // 报错 只能访问此联合类型的所有类型里共有的属性或方法
// }

// 对象的类型-接口(implement)
// 定义时，赋值的时候，变量的形状必须和接口的形状保持一致。（属性多或者少都会报错）
// interface Peoson {
//   name: string;
//   age: number;
//   [propName: string]: any; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// }
// let tom: Peoson = {
//   name: 'Tom',
//   isSayHi: () => {},
//   age: 18,
//   isflag: false
// }

// 只读属性
// interface Person {
//   readonly id?: number;
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }
// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// }
// tom.age = 18;
// tom.id = 123; // 报错

// 用接口表示数组, 一般不用接口来描述数组，而是使用接口来描述类数组
// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
// interface NumberArray {
//   [index: number]: number;
// }
// let arr: NumberArray = [1,2,3];

// function sum(){
//   let args: IArguments = arguments
// }


// 小测试
// interface Num {
//   [index: number]: string;
//   age: number;
//   sayHi: Function;
// }
// let tlll: Num = {
//   1: 'a',
//   2: '2',
//   age: 18,
//   sayHi: function(){}
// }

// 函数声明
// function sum(x: number, y: number, ...rest:Array<number>): number{
//   return x + y;
// }
// sum(1,2,3,4)

// 函数重载
// function reverse(x: number | string): number | string {
//   if(typeof x=== 'number'){
//     return Number(x.toString().split('').reverse().join(''));
//   }else if(typeof x === 'string'){
//     return x.split('').reverse().join('');
//   }
// }

// 类型断言
// function getlength(something: string | number): number{
//   if((<string>something).length){
//     return (something as string).length;
//   }else{
//     return something.toString().length;
//   }
// }

// 声明文件
// JQuery('#foo')
// JQuery(function(){

// })

// let cat = new Animal('Tom');
// jQuery.ajax('/api')

// ===========以下为相关例子===========
// 1.interface 和 type
// JQuery.ajax('/api', {
//   method: 'POST',
//   data: {
//     name: 'foo'
//   }
// })

// let ajaxSetting: JQuery.AjaxSetting = {
//   method: 'GET',
//   data: {
//     name: 'full'
//   }
// }


// 2.声明合并
// JQuery('#foo');
// JQuery.ajax('/api');

// ====== npm包 =====
// import { name, getName, Animal, Directions, Options } from './foo.js';
// console.log(name);
// let myName = getName();
// let cat = new Animal('Tom');
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// let options = {
//     data: {
//         name: Options.data
//     }
// };