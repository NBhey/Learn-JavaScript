describe("6.6 Объект функции, NFE.test", () => {
  test("Задание 1, Установка и уменьшение значения счётчика", () => {
    function makeCounter() {
      let count = 0;

      function counter() {
        return count++;
      }
      counter.set = (value) => (count = value);
      counter.decrease = () => count--;
      return counter;
    }
    let test = makeCounter();
    expect(test()).toBe(0);
    expect(test()).toBe(1);
    expect(test()).toBe(2);
  });

  test("Задание 2, Сумма с произвольным количеством скобок", () => {
    window.alert = jest.fn();
    function sum(a) {
      let currentSum = a;

      function f(b) {
        if (b !== undefined) {
          currentSum += b;
          return currentSum;
        }
      }

      f.toString = function () {
        return currentSum;
      };

      return f;
    }
    let testF = sum(1)(2);
    expect(testF).toBe(3);
    alert(sum(1)(2));
    expect(window.alert).toHaveBeenCalledWith(3);
  });
});
