// 核心原则: 对值所具有的结构进行类型检查,被称做“鸭式辨型法”或“结构性子类型化”
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// interface LabelledValue {
//   label: string;
// }
// function printLabel(labelledObj: LabelledValue){
//   console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: 'Size 10 Object' }; //  只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
// printLabel(myObj);

// 1.可选属性
// interface SquareConfig {
//   color?: string;
//   width?:number;
// }
// function createSquare(config: SquareConfig): { color: string, area: number } {
//   let newSquare = { color: 'White', area: 100 };
//   if(config.color){
//     newSquare.color = config.color;
//   }
//   if(config.width){
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let obj = { '1234123': '213412341', color: 'black' }; // 如果直接写到createSquare里面会报错,提成一个变量传递可以绕开ts坚持报错的问题
// let newSquare = createSquare(obj);

// 2.只读属性 只能在对象刚刚创建的时候修改其值
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }
 // ReadonlyArray 对于数组使用
// let aaa: number[] = [1,2,3];
// let ro: ReadonlyArray<number> = aaa;
// ro[0] = 12; // 所有有关数组的操作都不能使用

// 3.函数类型
// interface searchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: searchFunc;
// mySearch = function(source: string, subString: string){
//   let result = source.search(subString);
//   return result > -1;
// }

// 4.可索引的类型
// interface StringArray {
//   [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ['1', '4'];
// let myStr: string = myArray[0];

// 5.类类型 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
// interface ClockInterface {
//   currentTime: Date;
// }
// class Colock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number){

//   }
// }
interface ColockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Colock implements ColockInterface {
  currentTime: Date;
  setTime(d: Date){
    this.currentTime = d;
  }
  constructor(h: number,m: number){

  }
}