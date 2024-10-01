describe("2.15 Функции", () => {
  beforeEach(() => {
    window.confirm = () => false;
  });
  
  test("Задание 1, обязателен ли else", () => {
    function checkAge(age) {
      if (age > 18) {
        return true;
      }
      return confirm("Родители разрешили?");
    }
    expect(checkAge(9)).toBeFalsy();
    expect(checkAge(20)).toBeTruthy();
  });

  test("Задание 2, Перепишите функцию, используя оператор '?' или '||' ", () => {
    // function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       return confirm('Родители разрешили?');
    //     }
    //   }

    function checkAge(age) {
      return age > 18 ? true : confirm("Родители разрешили?");
    }
    expect(checkAge(9)).toBeFalsy();
    expect(checkAge(20)).toBeTruthy();

    function checkAge2(age) {
      return age > 18 || confirm("Родители разрешили?");
    }
    expect(checkAge2(9)).toBeFalsy();
    expect(checkAge2(20)).toBeTruthy();
  });

  test("Задание 3, Функция min(a, b)", () => {
    function min(a, b) {
      return a < b ? a : b;
    }
    expect(min(2, 5)).toBe(2);
    expect(min(3, -1)).toBe(-1);
    expect(min(1, 1)).toBe(1);
  });

  test("Задание 4, Функция pow(x,n)", () => {
    function pow(a, b) {
      return a ** b;
    }
    expect(pow(3, 2)).toBe(9);
    expect(pow(3, 3)).toBe(27);
    expect(pow(1, 100)).toBe(1);
  });

  test('Самостоятельная работа,', ()=>{
    let thread = {
      title: 'Поделитесь книжкой',
      author: 'RuBrick',
      total: 23,
      messages: [
        {
          id: 13201,
          date: '2018-01-09',
          text: 'Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо',
          author: {
            name: 'RuBrick',
            login: 'ru_brick',
            reputation: 3,
            role: 'user',
          },
        },
        {
          id: 13208,
          date: '2018-01-12',
          text: 'Неужели нет хорошей литературы?',
          author: {
            name: 'RuBrick',
            login: 'ru_brick',
            reputation: 3,
            role: 'user',
          },
        },
        {
          id: 13209,
          date: '2018-01-12',
          text: 'в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.',
          author: {
            name: 'Popov',
            login: 'popov_ma',
            reputation: 2310,
            role: 'user',
          },
        },
        {
          id: 13219,
          date: '2018-01-14',
          text: 'В сети много сайтов с хорошими объяснениями + есть курсы.',
          author: {
            name: 'Void',
            login: 'void',
            reputation: 5005,
            role: 'user',
          },
        },
        {
          id: 13220,
          date: '2018-01-14',
          text: 'Есть большая книга «JavaScript. Подробное руководство», потом смотришь документацию.',
          author: {
            name: 'noname',
            login: 'noname',
            reputation: 100,
            role: 'user',
          },
        },
        {
          id: 13250,
          date: '2018-01-19',
          text: 'Или можно посмотреть видеокурсы на YouTube! А самое главное — практика! И этот форум — лучшая тренировочная площадка!',
          author: {
            name: 'noname',
            login: 'noname',
            reputation: 110,
            role: 'user',
          },
        },
        {
          id: 13259,
          date: '2018-01-20',
          text: 'Понял, спасибо!',
          author: {
            name: 'RuBrick',
            login: 'ru_brick',
            reputation: 13,
            role: 'user',
          },
        },
      ],
    };
    

    const logSpy = jest.spyOn(window.console, 'log');
    function outputMessage(object, quantityDialog) {
      const messageLength = object.messages.length;
      if (messageLength === undefined)
        console.log('Ошибка формата! В теме нет сообщений');
    
      for (let i = messageLength - 1; quantityDialog > 0; quantityDialog -= 1) {
        console.log(
          `${object.messages[i].author.name} (репутация:${object.messages[i].author.reputation}): ${object.messages[i].text}`
        );
        i -= 1;
      }
    }
    outputMessage(thread, 3)
    expect(logSpy).toHaveBeenCalledTimes(3)
    expect(logSpy.mock.calls).toContainEqual(['RuBrick (репутация:13): Понял, спасибо!'],['noname (репутация:110): Или можно посмотреть видеокурсы на YouTube! А самое главное — практика! И этот форум — лучшая тренировочная площадка!'],['noname (репутация:100): Есть большая книга «JavaScript. Подробное руководство», потом смотришь документацию'])
  })
});
