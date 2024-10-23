describe("4.1 Объекты", () => {
  test("Задание 1, Напишите код, выполнив задание из каждого пункта отдельной строкой:", () => {
    const obj = {};
    obj.name = "John";
    obj.surname = "Smith";
    expect(obj).toEqual({ name: "John", surname: "Smith" });
    obj.name = "Pete";
    delete obj.surname;
    expect(obj).toEqual({ name: "Pete" });
  });

  test("Задание 2, Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false", () => {
    const schedule = {};
    function checkEmptyOrNotObj(obj) {
      return Object.keys(obj) == false ? true : false;
    }
    expect(checkEmptyOrNotObj(schedule)).toBeTruthy();
    schedule["name"] = "Pete";
    expect(checkEmptyOrNotObj(schedule)).toBeFalsy();
  });

  test("Задание 3, Можно ли изменить объект, объявленный с помощью const? Как вы думаете?", () => {
    const user = {
      name: "John",
    };
    user.name = "Pete";
    expect(user.name).toBe("Pete");
  });

  test("Задание 4, Сумма свойств объекта", () => {
    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
    };
    let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    expect(sum).toBe(390);
    for (let key in salaries) {
      delete salaries[key];
    }
    expect(!Object.keys(salaries)).toBeFalsy();
  });

  test("Задание 5, Умножаем все числовые свойства на 2", () => {
    let menu = {
      width: 200,
      height: 300,
      title: "My menu",
    };
    function multiplyNumeric(){
      for (let key in menu) {
        if (typeof menu[key] === 'number') {
          menu[key] *= 2;
        }
      }
    }
    multiplyNumeric()
    expect(menu).toEqual({
      width: 400,
      height: 600,
      title: "My menu",
    })
  });
});
