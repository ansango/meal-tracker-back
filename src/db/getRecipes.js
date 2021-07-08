import { db } from "./db";

export const getRecipes = async () => {
  const connection = await db.getConnection();
  return connection.collection("recipes").find({}).toArray();
};
