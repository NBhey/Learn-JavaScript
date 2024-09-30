describe("2.16 Function Expression", () => {
    test('2.16 Function Expression', ()=>{
      let sum = function(a,b){
        return a + b
      };
      expect(sum(3,3)).toBe(6)
      expect(sum).toBeInstanceOf(Function)

      let func = sum;
      expect(func(4,3)).toBe(7)
      expect(func).toBeInstanceOf(Function)
    })
  });
  