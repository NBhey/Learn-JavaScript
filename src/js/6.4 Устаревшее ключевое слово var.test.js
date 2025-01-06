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

  test("Задание 2", () => {
    const logSpy = jest.spyOn(global.console, "log");
    function test() {
      var phrase;

      console.log(phrase);

      phrase = "пока";
    }
    test();
    expect(logSpy).toHaveBeenCalledWith(undefined);

    function test2() {
      phrase = "пока";
      console.log(phrase);
      if (false) {
        var phrase;
      }
      
    }
    test2();
    expect(logSpy).toHaveBeenCalledWith("пока");
  });
});
