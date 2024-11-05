describe('4.5 Конструктор, оператор "new"', () => {
  test("Задание 1, Две функции - один объект", () => {
    const obj = {};
    function A() {
      return obj;
    }
    function B() {
      return obj;
    }
    let a = new A();
    let b = new B();
    expect(a === b).toBeTruthy()
  });

  test.skip('Задание 2, Создайте калькулятор при помоще конструктора, new Calculator', ()=>{
    function Calculator(){
        
    }
  })
});
