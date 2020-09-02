const Algo = require("../algo");
describe("Algo", () => {
  describe("reverse", () => {
    it('reverses a string that is one character long', function () {
      const originalString = 'a';
      const reversedString  = Algo.reverse(originalString);
      expect(reversedString).toEqual('a');
    });
    it('reverses a string that is two characters long', function () {
      const originalString = 'ab';
      const reversedString = Algo.reverse(originalString);
      const expectedOutput = 'ba';
      expect(reversedString).toEqual(expectedOutput);
    });
  });
  describe("isPalindrome", () => {
  
  });
  describe("capitalize", () => {
    
  });
});