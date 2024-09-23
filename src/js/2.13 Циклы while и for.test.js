describe("2.13 Циклы while и for", () => {
  test("Задача 1, Какое последнее значение выведет этот код", () => {
    let i = 3;
    let count;
    window.alert = jest.fn();
    while (i) {
      count = i--;
    }
    expect(count).toBe(1);
  });

  test("Задача 2, Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.", () => {
    let i = 0;
    let count;
    while (++i < 5) count = i;
    expect(count).toBe(4);

    count = 0;

    i = 0;
    while (i++ < 5) count = i;
    expect(count).toBe(5);
  });

  test("Задача 3, При помощи цикла for выведите чётные числа от 2 до 10.", () => {
    for (let i = 0; i <= 10; i += 1) {
      if (i % 2 === 0) {
        expect(i % 2 === 0).toBeTruthy();
      }
    }
  });

  test("Задача 4, Перепишите код, заменив цикл for на while, без изменения поведения цикла.", () => {
    // for (let i = 0; i < 3; i++) {
    //     alert( `number ${i}!` );
    //   }
    let i = 0;
    window.alert = jest.fn();
    while (i < 3) {
      alert(`number ${i}!`);
      expect(window.alert).toHaveBeenCalledWith(`number ${i}!`);
      i++;
    }
  });

  test.skip("Задача 5, Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.", () => {
    let num;

    do {
      num = prompt("Введите число больше 100?", 0);
    } while (num <= 100 && num);
  });

  test("Задача 7, Вывести простые числа.", () => {
    const testArr = [1,2,3,4,5,6,7,8,9,10]
    window.alert = jest.fn()
    next:for(let i = 0; i < testArr.length; i +=1){
        for(let j = 0; j < testArr.length; j +=1){
            if(testArr[i] % testArr[j] == 0) continue next;
        }
        alert(i)
        expect(window.alert).toHaveBeenCalledWith(testArr[i])
    }
  });
});
