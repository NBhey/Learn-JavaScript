describe("5.7 Map и Set", () => {
    test("Задание 1, Фильтрация уникальных элементов массива", () => {
      function unique(arr){
        return Array.from(new Set(arr));
      }
      let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      expect(unique(values)).toEqual(["Hare","Krishna",":-O"])
    });
  
    
  });
  