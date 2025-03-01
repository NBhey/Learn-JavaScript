describe("Самостоятельная работа Aston", () => {
  test("Задание", () => {
    var globalVar = "global";
    var outerVar = "outer";

    function outerFunc(outerParam) {
      function innerFunc(innerParam) {
        return [globalVar, outerParam, innerParam]; // guess,outer,inner
      }
      return innerFunc;
    }

    const x = outerFunc(outerVar);
    outerVar = "outer-2";
    globalVar = "guess";
    expect(x("inner")).toEqual(["guess", "outer", "inner"]);
  });

  test("", () => {
    const testObj = {
      method: () => {
        return `Hi ${this}`;
      },
    };
    const testObj2 = {
      name: "John",
    };

    testObj2.__proto__ = testObj;

    expect(testObj2.method()).toBe("Hi undefined");
  });

  test("", () => {
    function test() {
      return `Меня зовут ${this.name}`;
    }

    const user = {
      name: "John",
    };
    expect(test.call(user)).toBe(`Меня зовут John`);
  });

  test("Область видимости", () => {
    let logSpy = jest.spyOn(global.console, "log");
    let a = 10;
    function func() {
      console.log(a);
    }
    const wrap = () => {
      let a = 30;
      func();
    };
    a = 20;

    wrap();
    expect(logSpy).toHaveBeenCalledWith(20);
  });
});
