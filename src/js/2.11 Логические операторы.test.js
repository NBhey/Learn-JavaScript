describe("2.11 Логические операторы", () => {
  test("Задание 1,Что выведет код ниже? ", () => {
    window.alert = jest.fn();
    function test() {
      alert(null || 2 || undefined);
    }
    test();
    expect(window.alert).toHaveBeenCalledWith(2);
  });

  test("Задание 2,Что выведет код ниже? ", () => {
    window.alert = jest.fn();
    function test() {
      alert(1 && null && 2);
    }
    test();
    expect(window.alert).toHaveBeenCalledWith(null);
  });

  test("Задание 3,Что выведет код ниже?", () => {
    window.alert = jest.fn();
    function test() {
      alert(alert(1) && alert(2));
    }
    test();
    expect(window.alert).toHaveBeenCalledWith(1);
    expect(window.alert).toHaveBeenCalledWith(undefined);
  });

  test("Задание 4,Что выведет код ниже?", () => {
    window.alert = jest.fn();
    function test() {
      alert(null || (2 && 3) || 4);
    }
    test();
    expect(window.alert).toHaveBeenCalledWith(3);
  });

  test("Задание 5,Что выведет код ниже?", () => {
    window.alert = jest.fn();
    let value = NaN;

    value &&= 10;
    value ||= 20;
    value &&= 30;
    value ||= 40;

    alert(value);
    expect(window.alert).toHaveBeenCalledWith(30);
  });

  test("Задание 6,Проверка значения из диапазона", () => {
    let age = 15
    function checkAge(){
        if(age >= 14 && age <= 90){
            return true
        } else {
            return false
        }
    }
    expect(checkAge()).toBe(true);
    age = 90 
    expect(checkAge()).toBe(true);
    age = 10 
    expect(checkAge()).toBe(false);
  });

  test("Задание 7 и 8,Проверка значения из диапазона", () => {
    let age = 15
    function checkAge(){
        if(age >= 14 && age <= 90){
            return true
        } else {
            return false
        }
    }
    expect(checkAge()).toBe(true);
    age = 90 
    expect(checkAge()).toBe(true);
    age = 10 
    expect(checkAge()).toBe(false);
  });

  test.skip('Задание 8, Проверка логина', ()=>{
    function checkLogin(){
        let askWhoIsIt = prompt('Ваш логин');
        if(askWhoIsIt === 'Админ'){
            let password = prompt('Введите пароль')
            if(password === 'Я главный'){ alert ("Здравствуйте")}
            else{alert('Неверный пароль')}
        } else if(askWhoIsIt === '' || askWhoIsIt === null) {
            alert('Я вас не знаю!')
        }
    }
  })
});
