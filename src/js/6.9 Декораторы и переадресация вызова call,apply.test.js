jest.useFakeTimers();
describe("6.9 Декораторы и переадресация вызова call,apply", () => {
  test("Задание 1, декоратор шпион", () => {
    function work(a, b) {
      return a + b; // произвольная функция или метод
    }
    function spy(f) {
      function wrapper(...args) {
        wrapper.history.push(args);
        return f(...args);
      }
      wrapper.history = [];
      return wrapper;
    }
    work = spy(work);

    expect(work(1, 2)).toBe(3);
    expect(work(4, 5)).toBe(9);
    let logSpy = jest.spyOn(window.console, "log");
    for (let args of work.history) {
      console.log("call:" + args.join()); // "call:1,2", "call:4,5"
    }
    expect(logSpy).toHaveBeenCalledWith("call:1,2");
    expect(logSpy).toHaveBeenCalledWith("call:4,5");
  });

  test("Задание 2, Задерживающий декоратор", () => {
    let logSpy = jest.spyOn(window.console, "log");
    function f(x) {
      console.log(x);
    }

    function delay(func, time) {
      return function () {
        setTimeout(() => func.apply(this, arguments), time);
      };
    }

    let f1000 = delay(f, 1000);

    f1000("test");
    jest.advanceTimersByTime(20000);
    expect(logSpy).toHaveBeenCalledWith('test');
  });
});
