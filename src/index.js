const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

require("./config/express")(app);
const mongoose = require("mongoose");

mongoose.connect(
  config.databaseUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
  }
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(
  config.port,
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
