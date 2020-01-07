// 1.布尔值
let isDone: boolean = false;
// 2.数值
let decLiteral: number = 6; // 支持十进制，十六进制，以及es6中的二进制和八进制
// 3.字符串
let userName: string = 'zs';
userName = 'ls';
// 4.数组 a.类型[] b.使用数组泛型 Array<类型>
let list: number[] = [1,2,3];
let list1: Array<string> = ['1', '2'];
// 5.元组Tuple
let x: [string, number];
x = ['hello', 12312];
// 6.枚举 enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
// 7.Any 
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = NaN;
let list2: any[] = [1,'1', true];
list2[1]
// 8.Void void类型像是与any类型相反，它表示没有任何类型
function warnUser(): void {
  console.log('This is my warning message');
}
// tip: 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
// 9.Null 和 undefined
// tip: 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 10.Never 类型
let a: never;
let b = a;
// 11.Object 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 12.类型断言 a.<类型>语法 b.as语法
// let someValue: any = 'this is a string';
// let strLength: number = (<string>someValue).length;
let someValue: any = 'this is a stirng';
let strLength: number = (someValue as string).length;

