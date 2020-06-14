const Cube = require("../models/cube");

const getAll = async () => {
  const cubes = await Cube.find().lean();

  return cubes;
};

const create = async (cubeDoc) => {
  try {
    const cubeModel = new Cube(cubeDoc);
    const cube = await cubeModel.save();
    return cube;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  const cube = await Cube.findById(id).lean();

  return cube;
};

const searchCubes = async (name, difficultyLevelFrom, difficultyLevelTo) => {
  const query = Cube.find();

  if (!!name) {
    query.find({ name: new RegExp(name, "i") });
  }

  if (!!difficultyLevelFrom) {
    query.find({ difficultyLevel: { $gte: difficultyLevelFrom } });
  }

  if (!!difficultyLevelTo) {
    query.find({ difficultyLevel: { $lte: difficultyLevelTo } });
  }

  const result = await query.lean();
  return result;
};

module.exports = {
  getAll,
  create,
  getById,
  searchCubes,
};
