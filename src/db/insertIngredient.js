const db = require("./db");

const insertIngredient = async (ingredient) => {
  const connection = db.getConnection();
  await connection.collection("ingredients").insertOne(ingredient);
};

module.exports = insertIngredient