describe("5.5 Методы массивов", () => {
  test("Задание 1, перевод текста в другой вид", () => {
    function camelize(str) {
      const arr = str.split("-");
      str = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        str += arr[i][0].toUpperCase() + arr[i].slice(1);
      }
      return str;
    }
    expect(camelize("background-color")).toBe("backgroundColor");
    expect(camelize("list-style-image")).toBe("listStyleImage");
    expect(camelize("-webkit-transition")).toBe("WebkitTransition");

    function camelize2(str) {
      return str
        .split("-")
        .map((el, index) =>
          index === 0 ? el : el[0].toUpperCase() + el.slice(1)
        )
        .join("");
    }
    expect(camelize2("background-color")).toBe("backgroundColor");
    expect(camelize2("list-style-image")).toBe("listStyleImage");
    expect(camelize2("-webkit-transition")).toBe("WebkitTransition");
  });
});
