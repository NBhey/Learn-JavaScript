describe("5.7 Map и Set", () => {
  test("Задание 1, Фильтрация уникальных элементов массива", () => {
    function unique(arr) {
      return Array.from(new Set(arr));
    }
    let values = [
      "Hare",
      "Krishna",
      "Hare",
      "Krishna",
      "Krishna",
      "Krishna",
      "Hare",
      "Hare",
      ":-O",
    ];
    expect(unique(values)).toEqual(["Hare", "Krishna", ":-O"]);

    function unique2(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i += 1) {
        if (!newArr.includes(arr[i])) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
    expect(unique2(values)).toEqual(["Hare", "Krishna", ":-O"]);
  });

  test('Задание 2, отфильтруйте анаграммы', ()=>{
    function aclean(arr){
      let map = new Map()
      for (let word of arr){
        let sort = word.toLocaleLowerCase().split('').sort().join("")
        map.set(sort,word)
      }
      return Array.from(map.values())
    }

    expect(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])).toEqual(['PAN', 'hectares', 'era'])
  })
});
