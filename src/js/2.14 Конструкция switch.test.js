describe("2.14 Конструкция switch", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });
  test("Задача 1, Напишите 'if', аналогичный 'switch'", () => {
    // switch (browser) {
    //   case "Edge":
    //     alert("You've got the Edge!");
    //     break;

    //   case "Chrome":
    //   case "Firefox":
    //   case "Safari":
    //   case "Opera":
    //     alert("Okay we support these browsers too");
    //     break;

    //   default:
    //     alert("We hope that this page looks ok!");
    // }
    jest.spyOn(window, "prompt").mockImplementation(() => "Chrome");
    const browser = prompt("Название браузера");

    if (
      browser === "Chrome" ||
      browser === "Firefox" ||
      browser === "Safari" ||
      browser === "Opera"
    ) {
      alert("Okay we support these browsers too");
    } else {
      alert("We hope that this page looks ok!");
    }
    expect(window.alert).toHaveBeenCalledWith(
      "Okay we support these browsers too"
    );
  });

  test("Задача 2, Переписать условие if на switch", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => 3);
    const number = +prompt("Введите число между 0 и 3", "");
    switch (number) {
      case 0:
        alert("Вы ввели число 0");
        break;
      case 1:
        alert("Вы ввели число 1");
        break;
      case 2:
      case 3:
        alert("Вы ввели число 2, а может и 3");
        break;
    }

    expect(window.alert).toHaveBeenCalledWith("Вы ввели число 2, а может и 3");
  });

  
});
