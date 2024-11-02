describe('4.4 Методы объекта', ()=>{
    const logSpy = jest.spyOn(global.console, 'log')
    test.skip('Задание 1 Использование "this" в литерале объекта',()=>{
        function makeUser() {
            return {
              name: "John",
              ref: this
            };
          }
          
          let user = makeUser();
          
          console.log(console.log( user.ref.name )); 
    });
})