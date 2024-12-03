describe("5.10 Деструктурирующее присваивание", () => {
  test("Задание 1, Деструктурирующее присваивание", () => {
    let user = {
      name: "John",
      years: 30,
    };
    let { name, years, isAdmin = false } = user;
    expect(name).toBe("John");
    expect(years).toBe(30);
    expect(isAdmin).toBeFalsy();
  });

  test("Задание 2 ,Максимальная зарплата", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    const topSalary = (salaries) => {
      if (Object.entries(salaries).length === 0) return null;

      let [user, salar] = Object.entries(salaries).reduce((acc, el) => {
        if (acc[1] <= el[1]) {
          acc = el;
          return acc;
        } else {
          return acc;
        }
        
      });
      expect(user).toBe('Pete')
      expect(salar).toBe(300)
      return user
    };
    expect(topSalary(salaries)).toBe('Pete')
    expect(topSalary({})).toBe(null)
  });
});
