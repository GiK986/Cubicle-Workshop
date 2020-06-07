const path = require("path");

module.exports = {
  development: {
    port: process.env.PORT || 3000,
  },
  production: {},

  databaseFile: path.join(__dirname, "database.json"),
};
