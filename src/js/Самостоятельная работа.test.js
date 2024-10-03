describe("Самостоятельная работа", () => {
    test('Задача 1',()=>{
        // Напишите функцию, которая умеет возвращать посчитанную репутацию пользователя по формуле: разница лайков и дизлайков, которые ставят другие пользователи, умноженная на коэффициент. 
        // Коэффициент — доля не отредактированных сообщений пользователя. 
        // Если дизлайков больше, чем лайков, то коэффициент не применяется. Если сообщений у пользователя нет, его репутация равна 0.
        function calculateRep(countLike, countDislike, editMessages, totalMessages) {
            const ratio =
              totalMessages === 0 ? 0 : (totalMessages - editMessages) / totalMessages;
          
            return countLike > countDislike
              ? (countLike - countDislike) * ratio
              : countLike - countDislike;
          }
          expect(calculateRep(10, 5, 3, 5)).toBe(2)
          expect(calculateRep(5, 10, 3, 5)).toBe(-5)
    })
  });