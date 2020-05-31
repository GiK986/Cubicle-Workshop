const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = (app) => {
  //TODO: Setup the view engine
  app.set("views", path.join(__dirname, "../views"));
  app.engine(".hbs", handlebars({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  //TODO: Setup the body parser

  //TODO: Setup the static files
  app.use(express.static(path.join(__dirname, "..", "static")));
};
