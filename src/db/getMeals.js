const db = require("./db");

const getMeals = async () => {
  const connection = await db.getConnection();
  return connection.collection("meals").find({}).toArray();
};

module.exports = getMeals;
