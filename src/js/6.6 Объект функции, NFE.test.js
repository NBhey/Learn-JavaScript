describe("6.6 Объект функции, NFE.test", () => {
  test("Задание 2, Сумма с произвольным количеством скобок", () => {
    window.alert = jest.fn()
    function sum(a) {

        let currentSum = a;
      
        function f(b) {
            if(b !== undefined){
                currentSum += b;
                return currentSum;
            }
          
          
        }
      
        f.toString = function() {
          return currentSum;
        };
      
        return f;
      }
      
    alert( sum(1)(2) )
    expect(window.alert).toHaveBeenCalledWith(3);
   
  });
});
