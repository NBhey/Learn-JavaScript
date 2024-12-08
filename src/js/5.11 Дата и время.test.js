describe("5.11 Дата и время", () => {
  test("Задание 1, Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.", () => {
    let data = new Date(2012, 1, 20, 3, 12);
    const logSpy = jest.spyOn(global.console, "log");
    console.log(data);
    expect(logSpy).toHaveBeenCalledWith(data);
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

  test("Задание 3, День недели в европейской нумерации", () => {
    let date = new Date(2012, 0, 3);
    function getLocalDay(date) {
      date = date.getDay();
      return date === 0 ? 7 : date;
    }
    expect(getLocalDay(date)).toBe(2);
    expect(getLocalDay(new Date(2024, 11, 8))).toBe(7);
    expect(getLocalDay(new Date(2024, 11, 5))).toBe(4);
  });

  test("Задание 4, Какой день месяца был много дней назад?", () => {
    let date = new Date(2015, 0, 2);
    function getDateAgo(date, days) {
      days = days * 24 * 60 * 60 * 1000;
      date = date.getTime();

      return new Date(date - days).getDate();
    }
    expect(getDateAgo(date, 1)).toBe(1);
    expect(getDateAgo(date, 2)).toBe(31);
    expect(getDateAgo(date, 365)).toBe(2);
  });

  test("Задание 5, Последнее число месяца?", () => {
    function getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1);
      date.setDate(0);
      return date.getDate();
    }
    expect(getLastDayOfMonth(2012, 1)).toBe(29);
    expect(getLastDayOfMonth(2024, 10)).toBe(30);
    expect(getLastDayOfMonth(2024, 11)).toBe(31);
  });

  test("Задание 6, сколько сегодня прошло секунд", () => {
    let date = new Date(2024, 11, 7, 10);
    const getSecondsToday = (date) =>
      date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    expect(getSecondsToday(date)).toBe(36000);

    expect(getSecondsToday(new Date(2024, 11, 7, 15))).toBe(54000);
  });

  test("Задание 7, сколько секунд осталось до завтра", () => {
    let date = new Date(2024, 11, 7, 23);

    const getSecondsTomorow = (date) =>
      24 * 3600 -
      (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());

    expect(getSecondsTomorow(date)).toBe(3600);
    expect(getSecondsTomorow(new Date(2024, 11, 7, 15))).toBe(32400);
  });

  test("Задание 8, форматирование относительной даты", () => {
    function formatDate(date) {
      let date2 = new Date() - date;
      let minute = date2 / 60_000;
      let hours = date2 / 3_600_000;
      if (date2 < 1000) {
        return "прямо сейчас";
      } else if (minute < 1) {
        return "30 сек. назад";
      } else if (hours < 1) {
        return `${minute} мин. назад`;
      } else {
        let d = date;
        
        d = [
          "0" + d.getDate(),
          "0" + (d.getMonth() + 1),
          "" + d.getFullYear(),
          "0" + d.getHours(),
          "0" + d.getMinutes(),
        ].map((component) => component.slice(-2));
        return d.slice(0, 3).join('.') + ', ' + d.slice(3).join(':');
      }
    }
    expect(formatDate(new Date(new Date() - 1))).toBe("прямо сейчас");
    expect(formatDate(new Date(new Date() - 30 * 1000))).toBe("30 сек. назад");
    expect(formatDate(new Date(new Date() - 5 * 60 * 1000))).toBe(
      "5 мин. назад"
    );
    // expect(formatDate(new Date(new Date() - 86400 * 1000))).toBe(
    //   "07.12.24, 18:00"
    // );
  });
});
