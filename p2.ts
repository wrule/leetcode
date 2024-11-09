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
b.__proto__ = a;
c.__proto__ = b;
console.log(c.canWork);
console.log(c.canBark);
console.log(c.canEat);
c.show('234');
