describe("Самостоятельная работа", () => {
  test("Задача 1", () => {
    // Напишите функцию, которая умеет возвращать посчитанную репутацию пользователя по формуле: разница лайков и дизлайков, которые ставят другие пользователи, умноженная на коэффициент.
    // Коэффициент — доля не отредактированных сообщений пользователя.
    // Если дизлайков больше, чем лайков, то коэффициент не применяется. Если сообщений у пользователя нет, его репутация равна 0.
    function calculateRep(
      countLike,
      countDislike,
      editMessages,
      totalMessages
    ) {
      const ratio =
        totalMessages === 0
          ? 0
          : (totalMessages - editMessages) / totalMessages;

      return countLike > countDislike
        ? (countLike - countDislike) * ratio
        : countLike - countDislike;
    }
    expect(calculateRep(10, 5, 3, 5)).toBe(2);
    expect(calculateRep(5, 10, 3, 5)).toBe(-5);
  });

  test("Задача 2", () => {
    // Форумы содержат много тем для обсуждения, и вам часто приходится печатать по несколько сообщений из каждой темы.
    // В одной книге вы прочитали, что такие частые операции нужно выделять в функции, и решили выделить печать ленты сообщений в теме в отдельную функцию.

    // На вход функция принимает объект темы thread, а также количество сообщений для печати.
    let thread = {
      title: "Поделитесь книжкой",
      author: "RuBrick",
      total: 23,
      messages: [
        {
          id: 13201,
          date: "2018-01-09",
          text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
          author: {
            name: "RuBrick",
            login: "ru_brick",
            reputation: 3,
            role: "user",
          },
        },
        {
          id: 13208,
          date: "2018-01-12",
          text: "Неужели нет хорошей литературы?",
          author: {
            name: "RuBrick",
            login: "ru_brick",
            reputation: 3,
            role: "user",
          },
        },
        {
          id: 13209,
          date: "2018-01-12",
          text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
          author: {
            name: "Popov",
            login: "popov_ma",
            reputation: 2310,
            role: "user",
          },
        },
        {
          id: 13219,
          date: "2018-01-14",
          text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
          author: {
            name: "Void",
            login: "void",
            reputation: 5005,
            role: "user",
          },
        },
        {
          id: 13220,
          date: "2018-01-14",
          text: "Есть большая книга «JavaScript. Подробное руководство», потом смотришь документацию.",
          author: {
            name: "noname",
            login: "noname",
            reputation: 100,
            role: "user",
          },
        },
        {
          id: 13250,
          date: "2018-01-19",
          text: "Или можно посмотреть видеокурсы на YouTube! А самое главное — практика! И этот форум — лучшая тренировочная площадка!",
          author: {
            name: "noname",
            login: "noname",
            reputation: 110,
            role: "user",
          },
        },
        {
          id: 13259,
          date: "2018-01-20",
          text: "Понял, спасибо!",
          author: {
            name: "RuBrick",
            login: "ru_brick",
            reputation: 13,
            role: "user",
          },
        },
      ],
    };
    const logSpy = jest.spyOn(window.console, "log");
    function outputMessage(object, quantityDialog) {
      const messageLength = object.messages.length;
      if (messageLength === undefined)
        console.log("Ошибка формата! В теме нет сообщений");

      for (let i = messageLength - 1; quantityDialog > 0; quantityDialog -= 1) {
        if (!object.messages[i]) {
          break;
        } else {
          console.log(
            `${object.messages[i].author.name} (репутация:${object.messages[i].author.reputation}): ${object.messages[i].text}`
          );
          i -= 1;
        }
      }
    }
    outputMessage(thread, 2);
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy.mock.calls).toContainEqual(
      ["RuBrick (репутация:13): Понял, спасибо!"],
      [
        "noname (репутация:110): Или можно посмотреть видеокурсы на YouTube! А самое главное — практика! И этот форум — лучшая тренировочная площадка!",
      ],
      [
        "noname (репутация:100): Есть большая книга «JavaScript. Подробное руководство», потом смотришь документацию",
      ]
    );
  });

  test("Задача 3", () => {
    let allMessages = [
      { author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true },
      {
        author: "zloy-zloy",
        text: "Я с андроидом. Уже 3 года живёт, он самым крепким оказался, пережил 2 утопления.",
        edited: false,
      },
      {
        author: "МамаЗузу",
        text: "Айфон в своё время успешно сдох при первом же падении на кафельную плитку.",
        edited: false,
      },
      {
        author: "void",
        text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.",
        edited: false,
      },
      { author: "mama", text: "Айфон.", edited: false },
      { author: "mama", text: "Почему не отвечаешь?", edited: false },
      {
        author: "void",
        text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».",
        edited: false,
      },
      {
        author: "void",
        text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».",
        edited: false,
      },
      { author: "void", text: "Ленюсь.", edited: false },
      { author: "void", text: "Пока оценивать нечего.", edited: false },
      {
        author: "void",
        text: "Не по-русски как-то получается, хоть и на русском.",
        edited: false,
      },
      {
        author: "ivanov",
        text: "Чип и Дейл прикольно, играл в детстве.",
        edited: false,
      },
      { author: "ivanov", text: "hello, world", edited: true },
      { author: "void", text: "Сейчас напишу книгу по JS.", edited: false },
      { author: "ivanov", text: "Спасибо.", edited: false },
      {
        author: "ivanov",
        text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код — объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.",
        edited: true,
      },
      {
        author: "void",
        text: "Поделитесь видеоканалами по js.",
        edited: false,
      },
      { author: "void", text: "Ничего не понравилось.", edited: false },
    ];

    function checkMessage(arr) {
      let countEditTrue = 0;
      let countEditFalse = 0;

      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].edited) {
          countEditTrue += 1;
        } else {
          countEditFalse += 1;
        }
      }

      return `Общее количество сообщений: ${arr.length} \nОтредактированных: ${countEditTrue}\nНе отредактированных: ${countEditFalse}`;
    }

    expect(checkMessage(allMessages)).toBe(
      "Общее количество сообщений: 18 \nОтредактированных: 3\nНе отредактированных: 15"
    );
  });

  test("Задача 4, Создайте функцию getUsersNamesInAgeRange(users, gender), которая возвращает среднее значение возраста пользователей одного пола.", () => {
    const people = [
      {
        firstName: "Александр",
        secondName: "Карпов",
        age: 17,
        gender: "мужской",
      },
      { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
      {
        firstName: "Мелисса",
        secondName: "Леонова",
        age: 40,
        gender: "женский",
      },
      {
        firstName: "Мелания",
        secondName: "Савельева",
        age: 37,
        gender: "женский",
      },
      {
        firstName: "Мария",
        secondName: "Овчинникова",
        age: 18,
        gender: "женский",
      },
      {
        firstName: "Марьяна",
        secondName: "Котова",
        age: 17,
        gender: "женский",
      },
      {
        firstName: "Фёдор",
        secondName: "Селезнев",
        age: 50,
        gender: "мужской",
      },
      {
        firstName: "Георгий",
        secondName: "Петров",
        age: 35,
        gender: "мужской",
      },
      {
        firstName: "Даниил",
        secondName: "Андреев",
        age: 49,
        gender: "мужской",
      },
      {
        firstName: "Дарья",
        secondName: "Савельева",
        age: 25,
        gender: "женский",
      },
      { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
      {
        firstName: "Владислав",
        secondName: "Давыдов",
        age: 40,
        gender: "мужской",
      },
      { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
      {
        firstName: "Евгений",
        secondName: "Кузьмин",
        age: 19,
        gender: "мужской",
      },
    ];

    function getUsersNamesInAgeRange(users, gender) {
      if (gender !== "женский" && gender !== "мужской") {
        return 0;
      }
      if (users.length === 0) {
        return 0;
      }
      let sum = 0;
      let result = users
        .filter((el) => el.gender === gender)
        .map((el) => (sum = el.age + sum));
      return sum / result.length;
    }
    expect(getUsersNamesInAgeRange(people, "мужской")).toBe(32);
    expect(getUsersNamesInAgeRange(people, "женский")).toBe(27.4);
    expect(getUsersNamesInAgeRange([], "женский")).toBe(0);
    expect(getUsersNamesInAgeRange(people, "инопланетянин")).toBe(0);
  });

  test("Сумма свойств объекта", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    const sumSalaries = (obj) =>
      Object.values(obj).reduce((acc, el) => (acc += el), 0);

    expect(sumSalaries(salaries)).toBe(650);
  });

  test("Учусь понимать функции с каррированием", () => {
    function curry(f) {
      return function (a) {
        return function (b) {
          return f(a, b);
        };
      };
    }
    function sum(a, b) {
      return a + b;
    }

    expect(curry(sum)(1)(2)).toBe(3);

    // Напиши функцию sum, которая пройдет такой тест:
    // sum(1) = function;
    // sum(1)(2) = function;
    // sum(1)(2)() = 3;
    // sum(1)(2)(3) = function
    // sum(1)(2)(3)() = 6;
    function myCurry(a) {
      let count = a;
      function f(b) {
        if (b === undefined) {
          return count;
        }
        count += b;
        return f;
      }
      return f;
    }
    expect(myCurry(1)).toBeInstanceOf(Function);
    expect(myCurry(1)(2)()).toBe(3);
    expect(myCurry(1)(2)(3)).toBeInstanceOf(Function);
    expect(myCurry(1)(2)(3)()).toBe(6);
  });

  test("Разбираюсь в алгоритме бинарного поиска,оценка сложности операции", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // Есть ли конкретный элемент в этом массиве
    function searchElement(arr, el) {
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === el) {
          return true;
        }
      }
      return false;
    }
    expect(searchElement(arr, 7)).toBeTruthy();
    expect(searchElement(arr, 10)).toBeFalsy();

    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Делим массив пополам
    function binSearch(arr, el) {
      let min = -1;
      let max = arr.length;
      while (max - min > 1) {
        const between = Math.floor((max + min) / 2);
        if (arr[between] === el) {
          return true;
        }
        if (arr[between] > el) {
          max = between;
        } else if (arr[between] < el) {
          min = between;
        }
      }
      return false;
    }
    expect(binSearch(arr2, 7)).toBeTruthy();
    expect(binSearch(arr2, 10)).toBeTruthy();
    expect(binSearch(arr2, 11)).toBeFalsy();
  });

  test("Разбираюсь с декораторами и переадресацией вызова", () => {
    let logSpy = jest.spyOn(window.console, "log");
    function slow(x) {
      console.log(`Called with ${x}`);
      return x;
    }

    function cachingDecorator(func) {
      let cache = new Map(); //создаю коллекцию ключ/зачение, см. главу 5.7 Map и Set

      return function (x) {
        if (cache.has(x)) {
          //проверяю есть ли данный ключ в коллекции
          return cache.get(x); //если есть то получаю результат
        }

        // а иначе

        let result = func(x); // вызываем функцию из аргумента

        cache.set(x, result); // здесь х является ключом, а результат это результат из функции в данном примере из slow, set добавляет в коллекцию (ключ, значение)
        return result;
      };
    }
    slow = cachingDecorator(slow);
    slow(1);
    expect(logSpy).toHaveBeenCalledWith(`Called with 1`);
  });

  test("Разбираю области видимости", () => {
    let logSpy = jest.spyOn(window.console, "log");
    let a = 20;

    {
      a = 10;
    }

    console.log(a);

    expect(logSpy).toHaveBeenCalledWith(10);

    function changeA() {
      a = 3;
    }

    changeA();
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(3);

    function changeB() {
      function changeC() {
        a = 156;
      }
      changeC();
    }
    changeB();
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(156);

    function changeD() {
      let a = 1243;
    }
    changeD();
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(156);
    a = 1;
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(1);
  });

  test("Разбираю замкание", () => {
    let logSpy = jest.spyOn(window.console, "log");
    let a = 0;
    function plusOne() {
      a += 1;
    }

    function test() {
      let a = 100;
      plusOne();
      return a;
    }
    a = 33;
    expect(test()).toBe(100);
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(34);

    function test2(a) {
      plusOne();
      return a;
    }
    expect(test2(a)).toBe(34);
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(35);

    expect(test2(a)).toBe(35);
    console.log(a);
    expect(logSpy).toHaveBeenCalledWith(36);
  });

  test("Еще раз замыкание", () => {
    let a = 0;
    function plus() {
      a += 1;
    }

    function start() {
      plus();
      return function b() {
        plus();
        return function c() {
          plus();
        };
      };
    }
    start()()();
    expect(a).toBe(3);
  });

  test("И еще замыкание", () => {
    let logSpy = jest.spyOn(window.console, "log");
    let a = 0;
    function start() {
      return function b() {
        function plus() {
          a += 1;
        }
        let a = 144;
        plus();
        return function c() {
          plus();
          console.log(a);
        };
      };
    }
    start()()();
    expect(a).toBe(0);
    expect(logSpy).toHaveBeenCalledWith(146);
  });

  test("Угадай что? Правильно, замыкания!", () => {
    let logSpy = jest.spyOn(window.console, "log");
    let number = 0;
    expect(number).toBe(0);
    function start() {
      return function a() {
        function plus() {
          number += 1;
        }
        return function c() {
          let number = 144;
          plus();
          plus();
          console.log(number);
        };
      };
    }
    start()()();
    expect(logSpy).toHaveBeenCalledWith(144);
    expect(number).toBe(2);
  });

  test("Замыкания", () => {
    let logSpy = jest.spyOn(window.console, "log");
    let number = 0;
    expect(number).toBe(0);
    function start() {
      return function a() {
        let number = 1440;
        return function b() {
          function plus() {
            number += 1;
          }
          plus();
          return function c() {
            plus();
            plus();
            console.log(number);
          };
        };
      };
    }
    start()()()();
    expect(logSpy).toHaveBeenCalledWith(1443);
    expect(number).toBe(0);
  });
});
