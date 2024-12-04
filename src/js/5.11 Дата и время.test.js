describe("5.10 Деструктурирующее присваивание", () => {
  test("Задание 1, Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.", () => {
    let data = new Date(2012, 1, 20, 3, 12);
    const logSpy = jest.spyOn(global.console, "log");
    console.log(data);
    expect(logSpy).toHaveBeenCalledWith(
      new Date(Date.parse("2012-02-20T00:12:00.000Z"))
    );
  });

  test("Задание 2, покажите день недели", () => {
    let date = new Date(2012, 0, 3);
    let date2 = new Date(2019, 0, 3);
    let date3 = new Date(2024, 11, 4);
    function getWeekDay(date) {
      let weekDayArr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
      return weekDayArr[date.getDay()];
    }

    expect(getWeekDay(date)).toBe("ВТ");
    expect(getWeekDay(date2)).toBe("ЧТ");
    expect(getWeekDay(date3)).toBe("СР");
  });
});
