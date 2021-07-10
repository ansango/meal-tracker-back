import { db } from "./db";

export const getIngredients = async () => {
  const connection = await db.getConnection();
  return connection.collection("ingredients").find({}).toArray();
};
