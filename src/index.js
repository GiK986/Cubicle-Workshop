const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const app = require("express")();

const homeRoute = require("./routes/home");

require("./config/express")(app);
// require('./config/routes')(app);

app.use("/", homeRoute);

app.listen(
  config.port,
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
