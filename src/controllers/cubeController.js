const fsPromises = require("fs").promises;
const { databaseFile } = require("../config/config");

const getAll = async () => {
  const data = await fsPromises.readFile(databaseFile);
  const result = JSON.parse(data);

  return result;
};

const create = async (newData) => {
  const cubes = await getAll();
  cubes.push(newData);

  const data = JSON.stringify(cubes);
  await fsPromises.writeFile(databaseFile, data);
};

const getById = async (id) => {
  const cubes = await getAll();
  const cube = cubes.find((cube) => cube.id === id);

  return cube;
};

const searchCubes = async (name, difficultyLevelFrom, difficultyLevelTo) => {
  let cubes = await getAll();

  if (!!name && cubes.length > 0) {
    cubes = cubes.filter((cube) =>
      cube.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (!!difficultyLevelFrom && cubes.length > 0) {
    cubes = cubes.filter(
      (cube) => +cube.difficultyLevel >= +difficultyLevelFrom
    );
  }

  if (!!difficultyLevelTo && cubes.length > 0) {
    cubes = cubes.filter((cube) => +cube.difficultyLevel <= +difficultyLevelTo);
  }

  return cubes;
};

module.exports = {
  getAll,
  create,
  getById,
  searchCubes,
};
