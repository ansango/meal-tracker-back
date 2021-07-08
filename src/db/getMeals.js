import { db } from "./db";

export const getMeals = async () => {
  const connection = await db.getConnection();
  return connection.collection("meals").find({}).toArray();
};
