describe("5.2 Числа", () => {
  test("Задание 1, Сумма пользовательских чисел", () => {
    function sum() {
      jest.spyOn(window, "prompt").mockImplementation(() => 14);
      let num1 = +prompt("Введите число");
      jest.spyOn(window, "prompt").mockImplementation(() => 2);
      let num2 = +prompt("Введите число");
      return num1 + num2;
    }

    expect(sum()).toBe(16);
  });
  test("Задание 2, Почему 6.35.toFixed(1) == 6.3?", () => {
    expect(+(6.35).toFixed(1)).toBe(6.3);
    expect(Math.round(6.35 * 10) / 10).toBe(6.4);
  });

  test("Задание 3, Ввод числового значения", () => {
    // jest.spyOn(window, "prompt").mockImplementation(() => null);

    function readNumber(input) {
      if (input === null || input === "") return null;
      return input;
    }
    jest.spyOn(window, "prompt").mockImplementation(() => "");
    let input = prompt("Введите число");
    expect(readNumber(input)).toBe(null);
    jest.spyOn(window, "prompt").mockImplementation(() => 14);
    input = prompt("Введите число");
    expect(readNumber(input)).toBe(14);
  });

  test("Задание 4, Случайное число от min до max", () => {
    const random = (a, b) => a + Math.random() * (b - a);
    let randomResult = 1 + 0.123456789 * (4 - 1);
    jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
    expect(random(1, 4)).toBe(randomResult);

    randomResult = 1 + 0.823093696478205 * (4 - 1);
    jest.spyOn(global.Math, "random").mockReturnValue(0.823093696478205);
    expect(random(1, 4)).toBe(randomResult);
  });

  test("Задание 5, Случайное целое число от min до max", () => {
    const random = (a,b) => Math.round(a + Math.random() * (b-a) );
    let randomResult = Math.round(1 + 0.123456789 * (5 - 1));
    jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
    expect(random(1, 5)).toBe(randomResult);

    randomResult = Math.round(1 + 0.823093696478205 * (5 - 1));
    jest.spyOn(global.Math, "random").mockReturnValue(0.823093696478205);
    expect(random(1, 5)).toBe(randomResult);
  });
  
});
