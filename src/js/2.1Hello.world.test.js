
import firstStep from './2.1Hello.world.js'

describe('2.1 Привет мир', () => {
    test('is a function', () => {
        expect(firstStep).toBeInstanceOf(Function)
    });
    test('call alert', ()=> {
        window.alert = jest.fn();
        firstStep()
        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Я JavaScript!");
    
    })
})