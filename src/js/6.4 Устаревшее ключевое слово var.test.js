describe("6.4 Устарвешее ключевое слово var", () => {
  test("Задание 1", () => {
    if (true) {
      var test = 1;
    }
    expect(test).toBe(1);

    if (true) {
      let test2 = 4;
      expect(test2).toBe(4);
    }
  });
});
