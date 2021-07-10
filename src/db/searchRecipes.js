import { db } from "./db";

export const searchRecipes = async (searchString) => {
  const connection = db.getConnection();
  return connection
    .collection("recipes")
    .find({ $text: { $search: searchString } })
    .toArray();
};
