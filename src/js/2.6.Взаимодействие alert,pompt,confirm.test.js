import input from "./2.6.Взаимодействие alert,pompt,confirm.js";

describe('2.6.Взаимодействие alert,pompt,confirm', () => {
    test('is a function', () => {
        expect(input).toBeInstanceOf(Function)
    });
    test('call alert', ()=> {
        jest.spyOn(window, "prompt").mockImplementation(()=>"Denis")
        window.alert = jest.fn();
        input()
        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith("Denis");
    
    })
})