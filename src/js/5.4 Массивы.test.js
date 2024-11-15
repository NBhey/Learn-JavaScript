describe("5.3 Строки", () => {
  test("Задание 1, Скопирован ли массив?", () => {
    let fruits = ["Яблоки", "Груша", "Апельсин"];
    expect(fruits.length).toBe(3);
    let shoppingCart = fruits;
    shoppingCart.push("Банан");

    expect(fruits.length).toBe(4);
  });

  test("Задание 2, Операции с массивами", () => {
    let styles = ["Джаз", "Блюз"];
    styles.push("Рок-н-ролл");
    expect(styles.length).toBe(3);
    expect(styles).toEqual(["Джаз", "Блюз", "Рок-н-ролл"]);

    styles[Math.floor(styles.length / 2)] = "Классика";
    expect(styles).toEqual(["Джаз", "Классика", "Рок-н-ролл"]);

    let word = styles.shift();
    expect(word).toBe("Джаз");

    styles.unshift("Рэп", "Регги");
    expect(styles).toEqual(["Рэп", "Регги", "Классика", "Рок-н-ролл"]);
  });

  test("Задание 3, Вызов контекста", () => {
    logSpy = jest.spyOn(global.console, "log");
    let arr = ["a", "b"];

    arr.push(function () {
      console.log(this);
    });
    arr[2]();
    expect(logSpy).toHaveBeenCalledWith(arr);
  });

  test.skip("Задание 5, Подмассив наибольшей суммы", () => {
    function getMaxSubSum(arr) {
    

    }
   
  });
});
