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

class Animal {
  static sum(x){
    return x + x
  }
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  animalSay() {
    return `${this.color} ${this.name} говорит`;
  }
}

const lion = new Animal("Король", "Золотой");
const dog = new Animal("Шарик", "Коричневый");
console.log(Animal.sum(4))
console.log(lion)
console.log(lion.animalSay())
console.log(dog.animalSay())