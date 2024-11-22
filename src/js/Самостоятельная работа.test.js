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
});
