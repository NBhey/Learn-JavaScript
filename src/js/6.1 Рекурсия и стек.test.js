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
  });
});
