const path = require("path");
const { dbUser, dbPassword } = require("./config.json");

module.exports = {
  development: {
    port: process.env.PORT || 3000,
    databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@softuni-cxzmm.mongodb.net/cubicle`,
  },
  production: {},

  databaseFile: path.join(__dirname, "database.json"),
};
