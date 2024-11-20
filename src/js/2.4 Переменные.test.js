import variables from './2.4 Переменные.js'

describe('2.4 Переменные', () => {
    test('is a function', () => {
        expect(variables).toBeInstanceOf(Function)
    });
    test('call alert', ()=> {
        window.alert = jest.fn();
        variables()
        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Джон");
    
    })
})