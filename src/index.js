import firstStep from "./js/2.1 Hello.world.js";

// let controller = new AbortController();
// console.log(controller)
// let signal = controller.signal;
// console.log(signal)
// console.log(signal.aborted)

// // срабатывает при вызове controller.abort()
// signal.addEventListener('abort', () => console.log("отмена!"));

// controller.abort(); // отмена!

// console.log(signal.aborted); // true

// let controller = new AbortController();
// setTimeout(() => controller.abort(), 0);

// try {
//   let response = await fetch('https://get.geojs.io/v1/ip/geo.json', {
//     signal: controller.signal
//   });
//   console.log(response)
// } catch(err) {
//   if (err.name == 'AbortError') { // обработать ошибку от вызова abort()
//     console.log("Прервано!",err.name);
//   } else {
//     throw err;
//   }
// }

// class Animal {
//   static sum(x){
//     return x + x
//   }
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   animalSay() {
//     return `${this.color} ${this.name} говорит`;
//   }
// }

// const lion = new Animal("Король", "Золотой");
// const dog = new Animal("Шарик", "Коричневый");
// console.log(Animal.sum(4))
// console.log(lion)
// console.log(lion.animalSay())
// console.log(dog.animalSay())


// function sayHi(name){
//   return `Привет, ${this.name} `
// }

// const obj = {
//   name:'Петр'
// }

// const person1 = sayHi.call(obj)
// console.log(person1)

// const funcPerson2 = sayHi.bind(obj,'Паша')
// console.log(funcPerson2())

// const obj = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// console.log(obj.greet())

// const greetBind = obj.greet.bind(obj)
// setTimeout(greetBind, 1000); // Hello, my name is Alice
// setTimeout(()=>obj.greet(), 1000)


// function introduce() {
//   console.log(`I am ${this.name}`);
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// // Используй call, apply и bind для вызова introduce с разными контекстами
// introduce.call(person1)
// introduce.call(person2)

// introduce.apply(person1, [person1.name])
// introduce.apply(person2)

// const bindPerson1 = introduce.bind(person1)
// const bindPerson2 = introduce.bind(person2)
// bindPerson1()
// bindPerson2()


// const obj = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   greetArrow: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// obj.greet(); // Что выведется? Hello, my name is Alice
// obj.greetArrow(); // А здесь? Hello, my name is undefined

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.introduce = function() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   };
// }

// const person = new Person("Alice", 25);
// person.introduce(); // Что выведется? Hi, I'm Alice and I'm  25 years old.

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  getInfo: function() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
  updateYear: function(newYear) {
    this.year = newYear;
  }
};

console.log(car.getInfo()); // Что выведется? Toyota Corolla 2020
car.updateYear(2022);
console.log(car.getInfo()); // А теперь? Toyota Corolla 2022