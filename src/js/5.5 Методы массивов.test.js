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

    const camelize2 = (str) =>
      str
        .split("-")
        .map((el, index) =>
          index === 0 ? el : el[0].toUpperCase() + el.slice(1)
        )
        .join("");

    expect(camelize2("background-color")).toBe("backgroundColor");
    expect(camelize2("list-style-image")).toBe("listStyleImage");
    expect(camelize2("-webkit-transition")).toBe("WebkitTransition");
  });

  test("Задание 2, фильтрация по диапазону", () => {
    const filterRange = (arr, a, b) => arr.filter((el)=> el >= a && el <= b ? el : false);
    expect(filterRange([5,3,8,1],1,4)).toEqual([3,1])
    expect(filterRange([1,2,3,4,6,7,9],3,8)).toEqual([3,4,6,7])
  });

  test("Задание 3, фильтрация по диапазону 'на месте'", ()=>{
    let arr = [5, 3, 8, 1];
    function filterRangeInPlace(arr,a,b){
      for(let i = 0; i < arr.length; i += 1){
        if (arr[i] < a || arr[i] > b){
          arr.splice(i,1)
          i--
        }
      }
    }
    filterRangeInPlace(arr, 1, 4)
    expect(arr).toEqual([3, 1])
  })
});
