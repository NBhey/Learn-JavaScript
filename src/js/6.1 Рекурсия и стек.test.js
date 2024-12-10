describe("6.1 Рекурсия и стек", () => {
  test("Задание 1, Вычислить сумму чисел до данного", () => {
    function sumTo(n) {
      if (n === 1) {
        return n;
      }
      return n + sumTo(n - 1);
    }

    expect(sumTo(1)).toBe(1);
    expect(sumTo(2)).toBe(3);
    expect(sumTo(3)).toBe(6);
    expect(sumTo(4)).toBe(10);
    expect(sumTo(100)).toBe(5050);

    function sumTo2(n) {
      let result = 0;
      for (let i = 0; i <= n; i += 1) {
        result += i;
      }
      return result;
    }
    expect(sumTo2(1)).toBe(1);
    expect(sumTo2(2)).toBe(3);
    expect(sumTo2(3)).toBe(6);
    expect(sumTo2(4)).toBe(10);
    expect(sumTo2(100)).toBe(5050);

    function sumTo3(n) {
      return (n * (n + 1)) / 2;
    }
    expect(sumTo3(1)).toBe(1);
    expect(sumTo3(2)).toBe(3);
    expect(sumTo3(3)).toBe(6);
    expect(sumTo3(4)).toBe(10);
    expect(sumTo3(100)).toBe(5050);
  });

  test("Задание 2, Вычислить факториал", () => {
    function factorial(n) {
      let result = 1;
      for (let i = 1; i <= n; i += 1) {
        result *= i;
      }
      return result
    }
    expect(factorial(1)).toBe(1);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
