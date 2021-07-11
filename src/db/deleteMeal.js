const { ObjectID } = require("mongodb");
const db = require("./db");

const deleteMeal = async (mealId) => {
  const connection = db.getConnection();
  await connection.collection("meals").deleteOne({ _id: ObjectID(mealId) });
};

module.exports = deleteMeal;
