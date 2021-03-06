const { MongoClient } = require("mongodb");

const DB_NAME = "meal-tracker";

const db = {
  _dbClient: null,
  connect: async function (url) {
    const client = await MongoClient.connect(url, {
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this._dbClient = client;
  },
  getConnection: function () {
    if (!this._dbClient) {
      console.log("You need to call .connect() first!");
      process.exit(1);
    }

    return this._dbClient.db(DB_NAME);
  },
};

module.exports = db;
