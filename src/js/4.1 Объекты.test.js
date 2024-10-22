describe("4.1 Объекты", () => {
  test("Задание 1, Напишите код, выполнив задание из каждого пункта отдельной строкой:", () => {
    const obj = {};
    obj.name = "John";
    obj.surname = "Smith";
    expect(obj).toEqual({ name: "John", surname: "Smith" });
    obj.name = "Pete";
    delete obj.surname;
    expect(obj).toEqual({ name: "Pete" });
  });
});
