describe("2.8.Базовые операторы математики.test", () => {
  test("Задание 1", () => {
    let a = 1,
      b = 1;
    let c = ++a;
    let d = b++;

    expect(a).toBe(2)
    expect(b).toBe(2)
    expect(c).toBe(2)
    expect(d).toBe(1)
  });
  
  test("Задание 2", ()=>{
    let a = 2;
    let x = 1 + (a *= 2);

    expect(a).toBe(4)
    expect(x).toBe(5)
  })

  test("Задание 3", ()=>{
    expect("" + 1 + 0).toBe("10");
    expect("" - 1 + 0).toBe(-1);
    expect(true + false).toBe(1);
    expect(6 / "3").toBe(2);
    expect("2" * "3").toBe(6);
    expect(4 + 5 + "px").toBe("9px");
    expect("$" + 4 + 5).toBe("$45");
    expect("4" - 2).toBe(2);
    expect("4px" - 2).toBe(NaN);
    expect("  -9  " + 5).toBe("  -9  5");
    expect("  -9  " - 5).toBe(-14);
    expect(null + 1).toBe(1);
    expect(undefined + 1).toBe(NaN);
    expect(" \t \n" - 2).toBe(-2);
  })
});
