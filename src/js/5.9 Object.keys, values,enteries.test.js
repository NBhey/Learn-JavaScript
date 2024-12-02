describe("5.9 Map и Set", () => {
  test("Задание 1, сумма свойств объекта", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    function sumSalaries(obj) {
      let sum = 0;
      for (let el of Object.values(obj)) {
        sum += el;
      }
      return sum;
    }

    expect(sumSalaries(salaries)).toBe(650);
  });

  test("Задание 2, подсчет количества свойств объекта", () => {
    let user = {
      name: "John",
      age: 30,
    };

    let count = (obj) => Object.keys(obj).length;

    expect(count(user)).toBe(2);

    let user2 = {
      name: "John",
      age: 30,
      surname: "Johnson",
      hobby: "football",
    };
    expect(count(user2)).toBe(4);
  });
});
