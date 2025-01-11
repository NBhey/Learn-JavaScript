jest.useFakeTimers();
describe("6.8 Планирование setTimeot и setInterval", () => {
  test("задание 1", () => {
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
  });
});
