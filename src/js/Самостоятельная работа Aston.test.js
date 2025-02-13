var globalVar = "global";
var outerVar = "outer";

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam); // guess,outer,inner
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess";
x("inner");//guess, outer-2, inner
// разобрался почему outer будет а не outer-2, ответ оставил неправильным для себя