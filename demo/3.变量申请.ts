// let const 变量申请，块级作用域，暂时性死区
// 数组结构，对象结构
// 关于对象展开的一个小点
class C {
  p = 12;
  m(){

  }
  n = () => {}
}
let cd = new C();
let clone = { ...cd };
clone.p // ok
clone.n() // ok 该方法挂在实例对象上
// clone.m() // error 该方法挂在原型上，结构时丢失该原型方法