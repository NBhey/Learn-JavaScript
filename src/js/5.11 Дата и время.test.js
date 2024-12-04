describe("5.10 Деструктурирующее присваивание", () => {
  test("Задание 1, Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.", () => {
    let data = new Date(2012, 1, 20, 3, 12);
    const logSpy = jest.spyOn(global.console, "log");
    console.log(data)
    expect(logSpy).toHaveBeenCalledWith(new Date(Date.parse('2012-02-20T00:12:00.000Z')))
  });
});
