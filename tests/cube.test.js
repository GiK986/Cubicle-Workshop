const Cube = require("../src/models/cube");

describe("Cube class", () => {
  test("create new cube", () => {
    const cube = new Cube("first", "descriptions ", null, 3);
    expect(cube.id).not.toBeUndefined();
  });
});
