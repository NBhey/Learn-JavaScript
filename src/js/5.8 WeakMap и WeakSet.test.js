describe("5.8 WeaMap и WeakSet", () => {
  test('Задача 1, хранение отметок "не прочитано"', () => {
    let messages = [
      { text: "Hello", from: "John" },
      { text: "How goes?", from: "John" },
      { text: "See you soon", from: "Alice" },
    ];
    const logSpy = jest.spyOn(global.console, "log");
    let readMessages = new WeakSet();
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);
    readMessages.add(messages[2]);
    console.log("Read message 0: " + readMessages.has(messages[0]));
    console.log("Read message 1: " + readMessages.has(messages[1]));
    expect(logSpy).toHaveBeenCalledWith(
      `Read message 0: ${readMessages.has(messages[0])}`
    );
    expect(logSpy).toHaveBeenCalledWith(
      `Read message 1: ${readMessages.has(messages[1])}`
    );
  });

  test("Задание 2, Хранение времени прочтения", () => {
    let messages = [
      { text: "Hello", from: "John" },
      { text: "How goes?", from: "John" },
      { text: "See you soon", from: "Alice" },
    ];

    let readMap = new WeakMap();
    const logSpy = jest.spyOn(global.console, "log");
    readMap.set(messages[0], new Date(2017, 1, 1));
    console.log(readMap.set(messages[0], new Date(2017, 1, 1)));
    expect(logSpy).toHaveBeenCalledWith(
      readMap.set(messages[0], new Date(2017, 1, 1))
    );
  });
});
