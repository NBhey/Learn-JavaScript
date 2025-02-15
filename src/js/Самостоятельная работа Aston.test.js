describe("Самостоятельная работа Aston", () => {
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
    expect(x("inner")).toEqual(['guess',"outer","inner"]);
  });
});
