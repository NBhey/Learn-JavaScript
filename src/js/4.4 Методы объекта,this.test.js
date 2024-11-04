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
    calculator.read();
    expect(calculator.sum()).toBe(10);
    expect(calculator.mul()).toBe(24);
  });

  test("Задание 3, Цепь вызовов", () => {
    window.alert = jest.fn();
    let ladder = {
      step: 0,
      up() {
        this.step++;
        return this 
      },
      down() {
        this.step--;
        return this
      },
      showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this
      }
    };
    ladder.up().up().down().showStep().down().showStep()
    expect(window.alert).toHaveBeenCalledWith(1)
    expect(window.alert).toHaveBeenCalledWith(0)
  });
});
