jest.useFakeTimers();
describe("6.8 Планирование setTimeout и setInterval,Вывод каждую секунду", () => {
  test("Задание 1, Вывод каждую секунду", () => {
    let logSpy = jest.spyOn(window.console, "log");
    function printNumbers(from, to) {
      let time = setInterval(() => {
        console.log(from++);
      }, 1000);

      setTimeout(() => {
        clearInterval(time);
        console.log("setInterval отработал");
      }, to * 1000);
    }
    printNumbers(1, 5);
    jest.advanceTimersByTime(20000);

    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith(4);
    expect(logSpy).toHaveBeenCalledWith(5);
    expect(logSpy).toHaveBeenCalledWith("setInterval отработал");

    function printNumbers2(from, to) {
      let timer = setInterval(() => {
        console.log(from);
        if (from === to) {
          clearInterval(timer);
        }
        from++;
      }, 1000);
    }
    printNumbers2(90, 95);
    jest.advanceTimersByTime(20000);
    expect(logSpy).toHaveBeenCalledWith(90);
    expect(logSpy).toHaveBeenCalledWith(91);
    expect(logSpy).toHaveBeenCalledWith(92);
    expect(logSpy).toHaveBeenCalledWith(93);
    expect(logSpy).toHaveBeenCalledWith(94);
  });

  test.skip("6.8 Планирование setTimeout и setInterval, задание 1, вариант три", () => {
    function printNumbers3(to, from) {
      setTimeout(function f() {
        console.log(to++);
      }, 1000);
    }
  });

  test("Задание 2,что покажет setTimeout", () => {
    let logSpy = jest.spyOn(window.console, 'log')
    let i = 0;

    setTimeout(() => console.log(i), 100); // ?
    // предположим, что время выполнения этой функции >100 мс
    for (let j = 0; j < 1000; j++) {
      i++;
    }
    jest.advanceTimersByTime(200);
    expect(logSpy).toHaveBeenCalledWith(1000)
  });
});
