describe.skip('2.17 Стрелочные функции', ()=>{
    test('Задание 1,Замените код Function Expression стрелочной функцией:', ()=>{
        let ask = ((question, yes, no) => {
            if (confirm(question)) yes()
            else no();
          })
    })
})