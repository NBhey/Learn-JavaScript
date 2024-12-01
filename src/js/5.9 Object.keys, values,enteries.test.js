describe("5.9 Map и Set", () => {
    test('Задание 1, сумма свойств объекта', ()=>{
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
          };

          function sumSalaries(salaries) {

            let sum = 0;
            for (let salary of Object.values(salaries)) {
              sum += salary;
            }
          
            return sum; 
          }
          expect(sumSalaries(salaries)).toBe(650)
    })
  });
  