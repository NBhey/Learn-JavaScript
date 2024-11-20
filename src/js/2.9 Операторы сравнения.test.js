describe("2.9.Операторы сравнения", () => {
    test('Задание 1', ()=> {
        expect(5 > 4).toBeTruthy()
        expect("ананас" > "яблоко").toBeFalsy()
        expect("2" > "12").toBeTruthy()
        expect(undefined == null).toBeTruthy()
        expect(undefined === null).toBeFalsy()
        expect(null == "\n0\n").toBeFalsy()
        expect(null === +"\n0\n").toBeFalsy()
    })
});