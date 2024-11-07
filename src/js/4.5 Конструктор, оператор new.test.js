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

  test('Задание 2, Создайте калькулятор при помоще конструктора, new Calculator', ()=>{
    
    function Calculator(){
        this.read = function(){
          jest.spyOn(window, "prompt").mockImplementation(()=>4)
          this.num1 = +prompt('Введите число');
          jest.spyOn(window, "prompt").mockImplementation(()=>5)
          this.num2 = +prompt('Введите число');
        },
        this.sum = function(){
          return this.num1 + this.num2
        },
        this.mul = function(){
          return this.num1 * this.num2
        }
    }
    let calculator = new Calculator();
    calculator.read();
    expect(calculator.sum()).toBe(9)
    expect(calculator.mul()).toBe(20)
  });

  test('Задание 3, Создайте new Accumulator',()=>{
    function Accumulator(startingValue){
      this.value = startingValue;

      this.read = function(){
        jest.spyOn(window, "prompt").mockImplementation(()=>2)
        this.num1 = +prompt('Введите число');
        this.value += this.num1
      }
    }
    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    expect(accumulator.value).toBe(5)
  })
});
