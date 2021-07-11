const db = require("./db");

const getRecipes = async () => {
  const connection = await db.getConnection();
  return connection.collection("recipes").find({}).toArray();
};

module.exports = getRecipes