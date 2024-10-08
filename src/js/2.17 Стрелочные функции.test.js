describe("2.17 Стрелочные функции", () => {
  test("Задание 1,Замените код Function Expression стрелочной функцией:", () => {
    window.confirm = () => false;
    window.alert = jest.fn();
    let ask = (question, yes, no) => {
      if (confirm(question)) yes();
      else no();
    };

    ask(
      "Вы согласны?",
      function () {
        alert("Вы согласились.");
      },
      function () {
        alert("Вы отменили выполнение.");
      }
    );

    expect(window.alert).toHaveBeenCalledWith("Вы отменили выполнение.");

    window.confirm = () => true;
    ask(
      "Вы согласны?",
      function () {
        alert("Вы согласились.");
      },
      function () {
        alert("Вы отменили выполнение.");
      }
    );
    expect(window.alert).toHaveBeenCalledWith("Вы согласились.");
  });
});
