describe("6.3 Область видимости переменных, замыкание", () => {
  const logSpy = jest.spyOn(global.console, "log");
  test("Задание 1, Учитывает ли функция последние изменения?", () => {
    let name = "John";
    function sayHi() {
      console.log("Hi, " + name);
    }
    name = "Pete";
    sayHi(); // что будет показано: "John" или "Pete"?
    expect(logSpy).toHaveBeenCalledWith("Hi, Pete");
  });

  test("Задание 2, Какие переменные доступны", () => {
    function makeWorker() {
      let name = "Pete";

      return function () {
        console.log(name);
      };
    }
    let name = "John";
    // создаём функцию
    let work = makeWorker();
    // вызываем её
    work(); // что будет показано?
    expect(logSpy).toHaveBeenCalledWith("Pete");
  });

  test.skip('Задание 3, Независимы ли счетчики', ()=>{

  })
});
