const db = require("./db");

const insertMeal = async (meal) => {
  const connection = db.getConnection();
  connection.collection("meals").insertOne(meal);
};

module.exports = insertMeal;
