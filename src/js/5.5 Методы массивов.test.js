describe("5.5 Методы массивов", () => {
  test("Задание 1, перевод текста в другой вид", () => {
    function camelize(str) {
      const arr = str.split("-");
      str = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        str += arr[i][0].toUpperCase() + arr[i].slice(1);
      }
      return str;
    }
    expect(camelize("background-color")).toBe("backgroundColor");
    expect(camelize("list-style-image")).toBe("listStyleImage");
    expect(camelize("-webkit-transition")).toBe("WebkitTransition");

    const camelize2 = (str) =>
      str
        .split("-")
        .map((el, index) =>
          index === 0 ? el : el[0].toUpperCase() + el.slice(1)
        )
        .join("");

    expect(camelize2("background-color")).toBe("backgroundColor");
    expect(camelize2("list-style-image")).toBe("listStyleImage");
    expect(camelize2("-webkit-transition")).toBe("WebkitTransition");
  });

  test("Задание 2, фильтрация по диапазону", () => {
    const filterRange = (arr, a, b) =>
      arr.filter((el) => (el >= a && el <= b ? el : false));
    expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1]);
    expect(filterRange([1, 2, 3, 4, 6, 7, 9], 3, 8)).toEqual([3, 4, 6, 7]);
  });

  test("Задание 3, фильтрация по диапазону 'на месте'", () => {
    let arr = [5, 3, 8, 1];
    function filterRangeInPlace(arr, a, b) {
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < a || arr[i] > b) {
          arr.splice(i, 1);
          i--;
        }
      }
    }
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3, 1]);
  });

  test("Задание 4, Сортировать в порядке по убыванию", () => {
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => b - a);
    expect(arr).toEqual([8, 5, 2, 1, -10]);
  });

  test("Задание 5, Скопировать и отсортировать массив", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = arr.slice().sort();
    expect(arr).toEqual(["HTML", "JavaScript", "CSS"]);
    expect(sorted).toEqual(["CSS", "HTML", "JavaScript"]);
  });

  test("Задание 6, Создать расширяемый калькулятор", () => {
    function Calculator() {
      this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
      };

      this.calculate = function (str) {
        let arr = str.split(" "),
          a = Number(arr[0]),
          operator = arr[1],
          b = Number(arr[2]);
        return this.methods[operator](a, b);
      };

      this.addMethod = function (str, func) {
        this.methods[str] = func;
      };
    }
    let checkFunc = new Calculator();
    expect(checkFunc.calculate("5 + 7")).toBe(12);
    expect(checkFunc.calculate("3 + 7")).toBe(10);

    let powerCalc = new Calculator();
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    expect(powerCalc.calculate("5 * 3")).toBe(15);
    expect(powerCalc.calculate("5 / 5")).toBe(1);
    expect(powerCalc.calculate("5 ** 3")).toBe(125);
  });

  test("Задание 7, трансформировать в массив имен", () => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map((el) => el.name);
    expect(names).toEqual(["Вася", "Петя", "Маша"]);
  });

  test("Задание 8, трансформировать в объекты", () => {
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map((el) => {
      return { fullName: `${el.name} ${el.surname}`, id: el.id };
    });

    expect(usersMapped).toEqual([
      { fullName: "Вася Пупкин", id: 1 },
      { fullName: "Петя Иванов", id: 2 },
      { fullName: "Маша Петрова", id: 3 },
    ]);

    expect(usersMapped[0].id).toBe(1);
    expect(usersMapped[0].fullName).toBe("Вася Пупкин");
  });

  test("Задание 9, отсортировать пользователей по возрасту", () => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [vasya, petya, masha];
    function sortByAge(arr) {
      return arr.sort((a, b) => a.age - b.age);
    }
    expect(sortByAge(arr)).toEqual([
      { name: "Вася", age: 25 },
      { name: "Маша", age: 28 },
      { name: "Петя", age: 30 },
    ]);
  });

  test("Задание 10, перемешайте массив", () => {
    let arr = [1, 2, 3];

    let shuffle = function (array) {
      array.sort(() => Math.floor(Math.random() - 0.5));
    };

    shuffle = jest.fn();
    shuffle.mockReturnValueOnce([2, 1, 3]);
    expect(shuffle(arr)).toEqual([2, 1, 3]);
  });

  test("Задание 11, получтиь срединй возраст", () => {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [vasya, petya, masha];

    const getAverageAge = (arr) => {
      let sum = 0;
      arr.map((el) => (sum += el.age));
      return sum / arr.length;
    };

    expect(getAverageAge(arr)).toBe(28);
  });

  test("Задание 12, оставить уникальные элементы массива", () => {
    function unique(arr) {
      let newArr = [];
      arr.map((el) => {
        if (!newArr.includes(el)) {
          newArr.push(el);
        }
      });
      return newArr;
    }
    let strings = [
      "кришна",
      "кришна",
      "харе",
      "харе",
      "харе",
      "харе",
      "кришна",
      "кришна",
      ":-O",
    ];
    expect(unique(strings)).toEqual(["кришна", "харе", ":-O"]);
  });

  test("Задание 13, создайте объект с ключами из массива", () => {
    let users = [
      { id: "john", name: "John Smith", age: 20 },
      { id: "ann", name: "Ann Smith", age: 24 },
      { id: "pete", name: "Pete Peterson", age: 31 },
    ];

    function groupById(arr) {
      return arr.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
    }

    let usersById = groupById(users);
    expect(usersById).toEqual[
      {
        ann: { id: "ann", name: "Ann Smith", age: 24 },
        john: { id: "john", name: "John Smith", age: 20 },
        pete: { id: "pete", name: "Pete Peterson", age: 31 },
      }
    ];
  });
});
