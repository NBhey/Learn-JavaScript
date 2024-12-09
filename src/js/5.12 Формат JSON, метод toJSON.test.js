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
});
