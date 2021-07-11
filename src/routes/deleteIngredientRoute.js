const { deleteIngredient, getIngredients } = require("../db");

const deleteIngredientRoute = {
  method: "delete",
  path: "/ingredients/:name",
  handler: async (req, res) => {
    const { name } = req.params;
    await deleteIngredient(name);
    const updateIngredients = await getIngredients();
    res.status(200).json(updateIngredients);
  },
};

module.exports = deleteIngredientRoute;
