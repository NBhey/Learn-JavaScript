describe("6.7 Синтаксис new Function", () => {
  test("Задание 1", () => {
    let sum = new Function("a", "b", "return a + b");
    expect(sum(1, 2)).toBe(3);
    expect(sum(6, 22)).toBe(28);
  });

  test("Задание 2", () => {
    let say = new Function('alert("Hello")');
    window.alert = jest.fn();
    say();
    expect(window.alert).toHaveBeenCalledWith("Hello");
  });
});
