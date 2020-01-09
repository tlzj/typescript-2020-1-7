export const name = 'zs';
export const getName = function(){
  return 'name'
}
class Animal {
  constructor(name){
    this.name = name;
  }
  sayHi(){
    return this.name, 'sayHi';
  }
}
export const Animal = Animal;
export const Directions = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}
export const Options  = {
  data: 397987
}