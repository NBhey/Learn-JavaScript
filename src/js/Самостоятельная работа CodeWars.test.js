describe("Самостоятельная работа CodeWars", () => {
  test('Counting Duplicates Across Multiple Lists', ()=>{
    const countDuplicates = (name, age, height) => {
        let count = 0;
        let arr = []
        for (let i = 0; i <  Math.max(name.length,age.length,height.length); i +=1){
          if (arr.includes(name[i]) && arr.includes(age[i]) && arr.includes(height[i])){
            count +=1
          } 
          arr.push(name[i],age[i],height[i])
        }
        return count
      }
      
      expect(countDuplicates(['John','Beth','Beth','Bill'],[37,23,30,46],[183,170,165,175])).toBe(0)

  })
  });
  