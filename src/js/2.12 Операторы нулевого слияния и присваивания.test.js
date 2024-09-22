describe("2.12 Логические операторы", () => {
  test("Задание 1", () => {
    window.alert = jest.fn();
    alert(undefined ?? NaN ?? null ?? "" ?? " ");
    expect(window.alert).toHaveBeenCalledWith(NaN);
  });

  test("Задание 2, Что будет выведено?", () => {
    window.alert = jest.fn();
    let city = null;

    city ??= "Берлин";
    city ??= null;
    city ??= "Кёльн";
    city ??= "Гамбург";
    alert(city);
    expect(window.alert).toHaveBeenCalledWith("Берлин");
  });

  test("Задание 3, Перепишите этот код используя операторы нулевого слияния и присваивания", () => {
    let num1 = 10,
      num2 = 20,
      result;

    // if (result === null || result === undefined) {
    //   if (num1 !== null && num1 !== undefined) {
    //     result = num1;
    //   } else {
    //     result = num2;
    //   }
    // }
    result ??= num1 || num2
    expect(result).toBe(10);
  });
});
