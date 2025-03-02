describe("Самостоятельная работа Aston", () => {
  let logSpy = jest.spyOn(global.console, "log");

  test("Задание", () => {
    var globalVar = "global";
    var outerVar = "outer";

    function outerFunc(outerParam) {
      function innerFunc(innerParam) {
        return [globalVar, outerParam, innerParam]; // guess,outer,inner
      }
      return innerFunc;
    }

    const x = outerFunc(outerVar);
    outerVar = "outer-2";
    globalVar = "guess";
    expect(x("inner")).toEqual(["guess", "outer", "inner"]);
  });

  test("", () => {
    const testObj = {
      method: () => {
        return `Hi ${this}`;
      },
    };
    const testObj2 = {
      name: "John",
    };

    testObj2.__proto__ = testObj;

    expect(testObj2.method()).toBe("Hi undefined");
  });

  test("", () => {
    function test() {
      return `Меня зовут ${this.name}`;
    }

    const user = {
      name: "John",
    };
    expect(test.call(user)).toBe(`Меня зовут John`);
  });

  test("Область видимости", () => {
    let logSpy = jest.spyOn(global.console, "log");
    let a = 10;
    function func() {
      console.log(a);
    }
    const wrap = () => {
      let a = 30;
      func();
    };
    a = 20;

    wrap();
    expect(logSpy).toHaveBeenCalledWith(20);
  });

  test("Promise", () => {
    return Promise.reject("a")
      .then(
        (p) => p + "1",
        (p) => p + "2"
      )
      .catch((p) => p + "b")
      .catch((p) => p + "c")
      .then((p) => p + "d1")
      .then("d2")
      .then((p) => p + "d3")
      .finally((p) => expect(p).toBe(undefined)) // undefined
      .then((p) => expect(p).toBe("a2d1d3")); //a2d1d3
  });

  test("___", () => {
    function Hamster() {
      this.food = [];
    }

    Hamster.prototype.found = function (something) {
      this.food.push(something);
    };

    // Создаём двух хомяков и кормим первого
    let speedy = new Hamster();
    let lazy = new Hamster();

    speedy.found("яблоко");
    speedy.found("орех");

    console.log(speedy.food.length); // 2
    console.log(lazy.food.length); // 2 (!??) // должно быть 0
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith(0);
  });

  test("class", () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }
    }

    class Rabbit extends Animal {
      constructor(name) {
        super(name);
        this.name = name;
        this.created = Date.now();
      }
    }

    let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
    console.log(rabbit.name);
    expect(logSpy).toHaveBeenCalledWith("Белый кролик");
  });
  test("Что выведет консоль", () => {
    expect("B" + "a" + (1 - "hello")).toBe("BaNaN");
    expect((true && 3) + "d").toBe("3d");
    expect(Boolean(true && 3) + "d").toBe("trued");
    expect(NaN + 1).toBe(NaN);
    expect(NaN + "o").toBe("NaNo");
    expect(undefined + 1).toBe(NaN);
    expect(undefined - 1).toBe(NaN);
    expect(null + 1).toBe(1);
    expect(null / 5).toBe(0);
    expect(null == 0).toBe(false);
    expect(null == "").toBe(false);
    expect(null > 0).toBe(false);
    expect(null == "").toBe(false);
    expect("foo" + +"bar").toBe("fooNaN");
    expect("11" + "1" - 1).toBe(110);

    expect(true + false).toBe(1);
    expect(12 / "6").toBe(2);
    expect(12 / "+").toBe(NaN);
    expect("number" + 15 + 3).toBe("number153");
    expect([1] > null).toBe(true);
    expect("true" == true).toBe(false);
    expect("true" === true).toBe(false);
    expect("false" == false).toBe(false);
    expect(null == "").toBe(false);
    expect(!!"false" == !!"true").toBe(true);
    expect(["x"] == "x").toBe(true);
    expect([] + null + 1).toBe("null1");
    expect(0 || ("0" && {})).toBe(true);
    expect([1, 2, 3] == [1, 2, 3]).toBe(false);
  });
});
// {Array.prototype.myMap = function(callback, thisArg) {
//   console.log('thisArg 1',thisArg )
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//       result.push(callback.call(thisArg, this[i], i, this));
//       console.log('myMap start')
//       console.log('thisArg 2',thisArg )
//       console.log('this[i]', this[i])
//       console.log('i', i)
//       console.log('this', this)
//       console.log('myMap finish')
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4, 5];
// const doubled = arr.myMap((num) => num * 2);
// console.log(doubled); }
