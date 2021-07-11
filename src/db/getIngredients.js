const db = require("./db");

const getIngredients = async () => {
  const connection = await db.getConnection();
  return connection.collection("ingredients").find({}).toArray();
};

module.exports = getIngredients;
