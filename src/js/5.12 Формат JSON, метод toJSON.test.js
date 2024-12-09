describe("5.12 Формат JSON, метод toJSON", () => {
  test("Задание 1, преобразуйте объект в JSON, а затем обратно в другую переменную", () => {
    let user = {
      name: "Василий Иванович",
      age: 35,
    };
    let newUser = JSON.parse(JSON.stringify(user));

    expect(newUser).toEqual({
      name: "Василий Иванович",
      age: 35,
    });
  });
  test("Задание 2,Исключить обратные ссылки", () => {
    let room = {
      number: 23,
    };

    let meetup = {
      title: "Совещание",
      occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
      place: room,
    };
    room.occupiedBy = meetup;
    meetup.self = meetup;

    let result = JSON.parse(JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));

    expect(result).toEqual({
      title: "Совещание",
      occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
      place: { number: 23 },
    });
  });
});
