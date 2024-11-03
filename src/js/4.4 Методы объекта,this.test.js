describe("4.4 Методы объекта", () => {
  const logSpy = jest.spyOn(global.console, "log");
  test('Задание 1 Использование "this" в литерале объекта', () => {
    function makeUser() {
      return {
        name: "John",
        ref() {
          return this;
        },
      };
    }
    let user = makeUser();
    console.log(user.ref().name);
    expect(logSpy).toHaveBeenCalledWith("John");
  });

  test("Задание 2, Создайте калькулятор", () => {
    let calculator = {
      read() {
        this.a = 6;
        this.b = 4;
      },
      sum() {
        return this.a + this.b;
      },
      mul() {
        return this.a * this.b;
      },
    };
    calculator.read()
    expect(calculator.sum()).toBe(10);
    expect(calculator.mul()).toBe(24);
  });
});
