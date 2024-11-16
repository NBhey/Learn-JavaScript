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

  test("Задание 5, Подмассив наибольшей суммы", () => {
    function getMaxSubSum(arr) {
      let resultSum = 0;
      for (let i = 0; i < arr.length; i += 1) {
        let sum = 0;
        for (let j = i; j < arr.length; j += 1) {
          sum += arr[j];
          resultSum = Math.max(resultSum,sum);
        }
      }
      return resultSum
    }
    expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5)
    expect(getMaxSubSum([1,-2,3,4,-9,6])).toBe(7)
    expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11)
    expect(getMaxSubSum([1, 2, 3])).toBe(6)
    expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100)

    function getMaxSubSum2(arr) {
      let sum = 0;
      let resultSum = 0;
     for (let item of arr){
      sum += item;
      resultSum = Math.max(resultSum,sum)
      if(sum < 0) sum = 0;
     }
      return resultSum
    }
    expect(getMaxSubSum2([-1, 2, 3, -9])).toBe(5)
    expect(getMaxSubSum2([1,-2,3,4,-9,6])).toBe(7)
    expect(getMaxSubSum2([-1, 2, 3, -9, 11])).toBe(11)
    expect(getMaxSubSum2([1, 2, 3])).toBe(6)
    expect(getMaxSubSum2([100, -9, 2, -3, 5])).toBe(100)
  });
});
