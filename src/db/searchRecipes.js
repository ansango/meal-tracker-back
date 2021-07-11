import { db } from "./db";

export const searchRecipes = async (searchString) => {
  const connection = await db.getConnection();
  return connection
    .collection("recipes")
    .find({ $text: { $search: searchString } })
    .toArray();
};
