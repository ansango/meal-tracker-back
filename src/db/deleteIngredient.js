const db = require("./db");

const deleteIngredient = async (ingredientName) => {
  const connection = db.getConnection();
  await connection
    .collection("ingredients")
    .deleteOne({ name: ingredientName });
};

module.exports = deleteIngredient;
