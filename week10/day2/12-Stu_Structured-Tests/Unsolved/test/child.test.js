const Child = require("../child");

describe("Child", () => {
    it('has a name when instantiated', function () {
        // Arrange
        const name = 'Foo';
        const age = 9;

        //Act
        const newChild = new Child(name, age);

        // Assert
        expect(newChild.name).toEqual(name);
    });
    it('throws an error when name is not a string', function () {
        //Arrange
        const badName = 1234;
        const age = 3000;

        // Act
        // nothing
        
        // Assert
        expect(() => new Child(badName, age))
            .toThrow("Expected parameter 'name' to be a non-empty string");
    });
});
