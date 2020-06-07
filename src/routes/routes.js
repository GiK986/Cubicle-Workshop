const express = require("express");
const router = express.Router();
const cubeController = require("../controllers/cubeController");
const Cube = require("../models/cube");

router.get("/", async (req, res) => {
  const { search, from, to } = req.query;

  let cubes = [];
  if (!!search || !!from || !!to) {
    cubes = await cubeController.searchCubes(search, from, to);
  } else {
    cubes = await cubeController.getAll();
  }

  res.render("index", { title: "Home", cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Cube" });
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  const cube = new Cube(name, description, imageUrl, difficultyLevel);

  await cubeController.create(cube);
  res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  const cube = await cubeController.getById(id);
  res.render("details", { title: "Cube details", ...cube });
});

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
