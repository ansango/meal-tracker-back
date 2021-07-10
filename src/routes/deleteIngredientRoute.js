import { deleteIngredient, getIngredients } from "../db";
export const deleteIngredientRoute = {
  method: "delete",
  path: "/ingredients/:name",
  handler: async (req, res) => {
    const { name } = req.params;
    await deleteIngredient(name);
    const updateIngredients = await getIngredients();
    res.status(200).json(updateIngredients);
  },
};
