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

  test("Задание 6, сумма с помощью замыканий", () => {
    function sum(a) {
      if (a == undefined) return;

      return function (b) {
        return a + b;
      };
    }
    expect(sum(1)(2)).toBe(3);
    expect(sum(5)(-1)).toBe(4);
  });

  test.skip("Задание 7, Видна ли переменна?", () => {
    let x = 1;
    function func() {
      console.log(x); // ?
      let x = 2;
    }
    // нет, т.к. в func создает свое окружение и в этом окружение есть переменная х, но проблема в том, что она инициализируется после
    // того как мы вызвали функцию консоль со значением данной переменной
    func();
  });

  test("Задание 8, Фильтрация с помощью функции", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    function inBetween(a, b) {
      return function (x) {
        return a <= x && b >= x;
      };
    }
    expect(arr.filter(inBetween(3, 6))).toEqual([3, 4, 5, 6]);

    function inArray(array) {
      return function (x) {
        if (array.includes(x)) {
          return x;
        }
      };
    }

    expect(arr.filter(inArray([1, 2, 10]))).toEqual([1, 2]);
  });

  test("Задание 9, Сортировать по полю", () => {
    let users = [
      { name: "Иван", age: 20, surname: "Иванов" },
      { name: "Пётр", age: 18, surname: "Петров" },
      { name: "Анна", age: 19, surname: "Каренина" },
    ];

    function byField(fieldName) {
      return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
      };
    }

    expect(users.sort(byField("name"))).toEqual([
      { name: "Анна", age: 19, surname: "Каренина" },
      { name: "Иван", age: 20, surname: "Иванов" },
      { name: "Пётр", age: 18, surname: "Петров" },
    ]);

    expect(users.sort(byField("age"))).toEqual([
      { name: "Пётр", age: 18, surname: "Петров" },
      { name: "Анна", age: 19, surname: "Каренина" },
      { name: "Иван", age: 20, surname: "Иванов" },
    ]);
  });

  test("Задание 10, Армия функций", () => {
    // Необходимо починить код
    function makeArmy() {
      let shooters = [];

      let i = 0;
      while (i < 10) {
        let j = i;
        let shooter = function () {
          // функция shooter
          return j; // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
        i++;
      }

      // ...а в конце вернуть массив из всех стрелков
      return shooters;
    }

    let army = makeArmy();
    expect(army[0]()).toBe(0);
    expect(army[1]()).toBe(1);
    expect(army[2]()).toBe(2);
    expect(army[9]()).toBe(9);
  });
});
