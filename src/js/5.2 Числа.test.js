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
    expect(+6.35.toFixed(1)).toBe(6.3);
    expect(Math.round(6.35 * 10) / 10).toBe(6.4);
  });

  test('Задание 3, Ввод числового значения', ()=>{
    
    // jest.spyOn(window, "prompt").mockImplementation(() => null);
    
    
    
    function readNumber(input){
      do {
      } while(!isFinite(input))
      if (input === null || input === '') return null;

      return input
    }
    jest.spyOn(window, "prompt").mockImplementation(() => '');
    let input = prompt("Введите число");
    expect(readNumber(input)).toBe(null)
    jest.spyOn(window, "prompt").mockImplementation(() => 14);
    input = prompt("Введите число");
    expect(readNumber(input)).toBe(14)
  })
});
