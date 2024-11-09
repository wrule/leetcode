// @ts-nocheck

function Animal() {
  this.canEat = true;

  this.show = (something) => {
    console.log(`可以吃 ${this.canEat} ${something}`);
  };
}

function Dog() {
  this.canBark = true;
}

function Human() {
  this.canWork = true;
}

const a = new Animal();
const b = new Dog();
const c = new Human();
Human.prototype.test = () => {
  console.log('你好世界，这是一个测试');
}
// b.__proto__ = a;
// c.__proto__ = b;
Object.setPrototypeOf(b, a);
// Object.setPrototypeOf(c, b);
console.log(c.canWork);
console.log(c.canBark);
console.log(c.canEat);
// c.show('234');
console.log(c.__proto__ === Human.prototype);
c.test();