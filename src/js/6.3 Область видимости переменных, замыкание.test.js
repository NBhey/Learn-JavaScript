describe("6.3 Область видимости переменных, замыкание", () => {
  const logSpy = jest.spyOn(global.console, "log");
  test("Задание 1, Учитывает ли функция последние изменения?", () => {
    let name = "John";
    function sayHi() {
      console.log("Hi, " + name);
    }
    name = "Pete";
    sayHi(); // что будет показано: "John" или "Pete"?
    expect(logSpy).toHaveBeenCalledWith("Hi, Pete");
  });

  test("Задание 2, Какие переменные доступны", () => {
    function makeWorker() {
      let name = "Pete";

      return function () {
        console.log(name);
      };
    }
    let name = "John";
    // создаём функцию
    let work = makeWorker();
    // вызываем её
    work(); // что будет показано?
    expect(logSpy).toHaveBeenCalledWith("Pete");

    function makeWorker2() {
      return function () {
        console.log(name);
      };
    }
    work = makeWorker2();
    work();
    expect(logSpy).toHaveBeenCalledWith("John");
  });

  test("Задание 3, Независимы ли счетчики", () => {
    function makeCounter() {
      let count = 0;

      return function () {
        return count++;
      };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter2()).toBe(0);
    expect(counter2()).toBe(1);
  });

  test("Задание 4, Объект счетчика", () => {
    function Counter() {
      let count = 0;

      this.up = function () {
        return ++count;
      };
      this.down = function () {
        return --count;
      };
    }

    let counter = new Counter();
    expect(counter.up()).toBe(1);
    expect(counter.up()).toBe(2);
    expect(counter.down()).toBe(1);
  });

  test.skip("Задание 5, Функция внутри if", () => {
    "use strict";
    let phrase = "Hello";

    if (true) {
      let user = "John";

      function sayHi() {
        return `${phrase}, ${user}`;
      }
    }
    // не увидит т.к. функция нраходится в скоупе (блоке кода)
    sayHi();
  });

  test("Задание 6, сумма с помощью замыканий", ()=>{
    function sum(a){
      if(a == undefined) return

      return function(b){
        return a + b
      }
    }
    expect(sum(1)(2)).toBe(3)
    expect(sum(5)(-1)).toBe(4)
  })
});
