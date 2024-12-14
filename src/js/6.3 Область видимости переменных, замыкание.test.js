describe("6.3 Область видимости переменных, замыкание", () => {
  test("Учитывает ли функция последние изменения?", () => {
    let name = "John";
    const logSpy = jest.spyOn(global.console, "log");
    function sayHi() {
      console.log("Hi, " + name);
    }

    name = "Pete";

    sayHi(); // что будет показано: "John" или "Pete"?

    expect(logSpy).toHaveBeenCalledWith("Hi, Pete");
  });
});
