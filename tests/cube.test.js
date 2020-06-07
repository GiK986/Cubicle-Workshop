const Cube = require("../src/models/cube");
const db = require("../src/controllers/cubeController");

describe("Cube class", () => {
  test("create new cube", () => {
    const cube = new Cube("first", "descriptions ", null, 3);
    expect(cube.id).not.toBeUndefined();
  });
});

describe("Database file", () => {
  test("Read file", () => {
    db.getAll().then((result) => {
      expect(result).not.toBeUndefined();
    });
  });
});
