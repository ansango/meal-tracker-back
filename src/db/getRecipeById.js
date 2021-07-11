const db = require("./db");

const getRecipeById = async (id) => {
  const connection = await db.getConnection();
  return await connection.collection("recipes").findOne({ id: id });
};

module.exports = getRecipeById;
