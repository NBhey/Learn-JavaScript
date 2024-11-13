describe('5.3 Строки', ()=>{
    test('Задание 1, Сделать первый символ заглавным', ()=>{
        const ucFirst = str =>  Boolean(str) ? str[0].toUpperCase() + str.slice(1) : str
        expect(ucFirst('вася')).toBe('Вася')
        expect(ucFirst('машина')).toBe('Машина')
        expect(ucFirst('')).toBe('')
    })

    test('Задание 2, Проверка на спам', ()=>{
        function checkSpam(str){
            let newStr =''
            for (let char of str){
                newStr += char.toLowerCase()
            }
           return newStr.includes('viagra') || newStr.includes('xxx') ? true : false
        }
        expect(checkSpam('buy ViAgRA now')).toBeTruthy()
        expect(checkSpam('free xxxxx')).toBeTruthy()
        expect(checkSpam('innocent rabbit')).toBeFalsy()

        const checkSpam2 = (str) =>str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx') ? true : false
        expect(checkSpam2('buy ViAgRA now')).toBeTruthy()
        expect(checkSpam2('free xxxxx')).toBeTruthy()
        expect(checkSpam2('innocent rabbit')).toBeFalsy()
    })

    test('Задание 3, Усечение строки', ()=>{
        const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0,19) + "…" : str
        expect(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)).toBe("Вот, что мне хотело…");
        expect(truncate("Всем привет!", 20)).toBe("Всем привет!");
    })

    test('Задание 4, Выделить число', ()=>{
        const extractCurrencyValue = str => +str.slice(1) 
        expect(extractCurrencyValue('$120')).toBe(120 );
    })
})