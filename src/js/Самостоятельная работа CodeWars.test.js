describe("Самостоятельная работа CodeWars", () => {
  test("Counting Duplicates Across Multiple Lists", () => {
    const countDuplicates = (name, age, height) => {
      let count = 0;
      let arr = [];
      for (
        let i = 0;
        i < Math.max(name.length, age.length, height.length);
        i += 1
      ) {
        if (
          arr.includes(name[i]) &&
          arr.includes(age[i]) &&
          arr.includes(height[i])
        ) {
          count += 1;
        }
        arr.push(name[i], age[i], height[i]);
      }
      return count;
    };

    expect(
      countDuplicates(
        ["John", "Beth", "Beth", "Bill"],
        [37, 23, 30, 46],
        [183, 170, 165, 175]
      )
    ).toBe(0);
  });
  test("Nickname Generator", () => {
    function nicknameGenerator(name) {
      if (name.length <= 3) return "Error: Name too short";
      let vowelArr = ["a", "e", "i", "o", "u"];
      for (let i = 0; i < vowelArr.length; i += 1) {
        if (name[2] === vowelArr[i]) {
          return name.slice(0, 4);
        }
      }
      return name.slice(0, 3);
    }

    expect(nicknameGenerator("Jeannie")).toBe("Jean");
    expect(nicknameGenerator("Robert")).toBe("Rob");
  });

  test("Be Concise I - The Ternary Operator", () => {
    describeAge = (age) =>  age <= 12 ? "You're a(n) kid" : age <= 17 ? "You're a(n) teenager" : age <= 64 ? "You're a(n) adult" : "You're a(n) elderly"
    expect(describeAge(12)).toBe("You're a(n) kid");
  });
});
