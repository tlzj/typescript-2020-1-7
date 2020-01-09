// declare const JQuery: (selector: string) => any;
// 重载 定义全局变量
// declare function JQuery(selector: string): any;
// declare function JQuery(somReadyCallback: () => any): any;
// // 定义类
// declare class Animal{
//   constructor(name: string)
//   sayHi:() => any;
// }
// // 命名空间namespace
// declare namespace jQuery {
//   function ajax (url: string, setting?: any):void;
//   const version: number;
//   class Event {
//     blur(eventType: EventType): void;
//   }
//   enum EventType {
//     CustomClick
//   }
// }

// // 嵌套的命名空间
// declare namespace JQuery {
//   function ajax(url: string, setting?: any): void;
//   namespace fn {
//     function extend(object: any): void;
//   }
// }


// 1.interface 和 type 
// interface AjaxSetting {
//   method?: 'GET' | 'POST';
//   data?: any;
// }
// declare namespace JQuery {
//   function ajax(url: string, setting?: AjaxSetting): void;
// }
// 防止命名冲突
// declare namespace JQuery {
//   interface AjaxSetting {
//     method?: 'GET' | 'POST';
//     data?: any;
//   } // 放到命名空间内部，防止命名冲突
//   function ajax(url: string, setting?: AjaxSetting): void;
// }

// 2.声明合并
// declare function JQuery(selector: string): any;
// declare namespace JQuery {
//   function ajax(url: string, setting?: any): void;
// }


// ====== npm包 =====
export const name: string;
export function getName(): number;
export class Animal {
  constructor(name: string);
  sayHi(): number;
}
export enum Directions {
  Up,
  Down,
  Left,
  Right
}
export interface Options {
  data: any;
}
