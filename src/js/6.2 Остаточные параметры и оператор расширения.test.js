describe("6.2 Остаточные параметры и оператор расширения", () => {
  test("Самостоятельная работа, задание 1", () => {
    function sum(a, b) {
      return a + b;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(3);
  });

  test("Самостоятельная работа, задание 2", () => {
    function sumAll(...args) {
      // args — имя массива
      let sum = 0;

      for (let arg of args) sum += arg;

      return sum;
    }
    expect(sumAll(1, 2, 3, 4, 5)).toBe(15);
  });

  test("Самостоятельная работа, задание 3", () => {
    const logSpy = jest.spyOn(window.console, "log");
    function showName() {
      // args — имя массива
      console.log(arguments.length);
      console.log(arguments[2]);
      console.log(arguments[1]);
    }
    showName("один", 2, "камень");
    expect(logSpy).toHaveBeenCalledWith("камень");
    expect(logSpy).toHaveBeenCalledWith(3);
    expect(logSpy).toHaveBeenCalledWith(2);
  });

  test("Самостоятельная работа, задание 4", () => {
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];

    expect(Math.max(...arr1, ...arr2)).toBe(8)
    expect(Math.max(...arr1, ...arr2, 25)).toBe(25)
    arr1 = [3, 5, 1];
    arr2 = [8, 9, 15];
    expect([0, ...arr1, 2, ...arr2]).toEqual([0,3,5,1,2,8,9,15])
  });
});
