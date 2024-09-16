import {checkToBeTruthy, whatOfficialNameJS, getNumber} from './2.10 Условное ветвление.js'


describe("2.10.Условное ветлвение", () => {
    test('Задание 1, Выведется ли alert?', ()=> {
        window.alert = jest.fn();
        checkToBeTruthy()
        expect(window.alert).toHaveBeenCalledWith('Привет');
    }),

    test('Задание 2, Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“', ()=> {
        jest.spyOn(window, "prompt").mockImplementation(() => "ECMAScript");
        window.alert = jest.fn();
        whatOfficialNameJS()
        expect(window.alert).toHaveBeenCalledWith('Верно!');

        jest.spyOn(window, "prompt").mockImplementation(() => "Dodo");
        whatOfficialNameJS()
        expect(window.alert).toHaveBeenCalledWith('Не знаете? ECMAScript!');
    })

    test('Задание 3,Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert: ' , ()=> {
        jest.spyOn(window, "prompt").mockImplementation(() => 5);
        window.alert = jest.fn();
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(1);

        jest.spyOn(window, "prompt").mockImplementation(() => -5);
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(-1);

        jest.spyOn(window, "prompt").mockImplementation(() => 0);
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(0);
    })

    
    test('Задание 3,Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert: ' , ()=> {
        jest.spyOn(window, "prompt").mockImplementation(() => 5);
        window.alert = jest.fn();
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(1);

        jest.spyOn(window, "prompt").mockImplementation(() => -5);
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(-1);

        jest.spyOn(window, "prompt").mockImplementation(() => 0);
        getNumber()
        expect(window.alert).toHaveBeenCalledWith(0);
    })
});