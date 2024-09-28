describe("2.15 Функции", () => {
  global.confirm = () => false;

  test("Задание 1, обязателен ли else", () => {
    function checkAge(age) {
      if (age > 18) {
        return true;
      }
      return confirm("Родители разрешили?");
    }
    expect(checkAge(9)).toBeFalsy();
    expect(checkAge(20)).toBeTruthy();
  });

  test("Задание 2, Перепишите функцию, используя оператор '?' или '||' ", () => {
    // function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       return confirm('Родители разрешили?');
    //     }
    //   }

    function checkAge(age) {
      return age > 18 ? true : confirm("Родители разрешили?");
    }
    expect(checkAge(9)).toBeFalsy();
    expect(checkAge(20)).toBeTruthy();

    function checkAge2(age) {
      return age > 18 || confirm("Родители разрешили?");
    }
    expect(checkAge2(9)).toBeFalsy();
    expect(checkAge2(20)).toBeTruthy();
  });

  test('Задание 3, Функция min(a, b)', () => {
    function min(a, b){
        return (a < b) ? a : b
    }
    expect(min(2, 5)).toBe(2)
    expect(min(3, -1)).toBe(-1)
    expect(min(1, 1)).toBe(1)
  })

  test('Задание 4, Функция pow(x,n)', () => {
    function pow(a, b){
        return a ** b
    }
    expect(pow(3, 2)).toBe(9)
    expect(pow(3, 3)).toBe(27)
    expect(pow(1, 100)).toBe(1)
  })
});
