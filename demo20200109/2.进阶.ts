// 1.类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//   if(typeof n === 'string'){
//     return n;
//   }else {
//     return n();
//   }
// }

// 2.字符串字面量类型
// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames){
//   // do something
// }
// handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错

// 3.元组 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// let tom: [string, number] = ['Tom', 25];
// let tom1: [string, number];
// tom1[0] = '1234'; // 单独赋值没问题
// tom1 = ['1231', 12341] // 如果直接赋值，必须给每个元素赋值，否则报错
// a.越界的元素 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

// 4.枚举 
// enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
// a.常数枚举(const)
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。 假如包含了计算成员，则会在编译阶段报错：
// const enum Color {Red, Green, Blue = "blue".length};// 报错
// b.外部枚举 declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 5.类
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   get name(){
//     return 'Jack';
//   }
//   set name(value){
//     console.log('setter:' + value);
//   }
// }
// let aa = new Animal('Kitty');
// aa.name = 'Tom';
// a.Typescript中类的用法： public private protected
/**
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
// class AnimalCls {
//   private name;
//   public constructor(name){
//     this.name = name;
//   }
// }
// class Cat extends AnimalCls {
//   constructor(name){
//     super(name);
//     // console.log(this.name)// 报错，私有属性在字类无法访问
//   }
// }

// class Animal {
//   public name;
//   protected constructor (name) {
//       this.name = name;
// }
// }
// class Cat extends Animal {
//   constructor (name) {
//       super(name);
//   }
// }

// class Animal {
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }
//   sayHi(): string {
//     return 'My name is' + this.name;
//   }
// }
// let aq: Animal = new Animal('Jack');
// console.log(aq.sayHi())

// 6.类与接口(implements)
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
