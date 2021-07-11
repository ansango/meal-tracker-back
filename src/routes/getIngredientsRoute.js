const { getIngredients } = require("../db");

const getIngredientsRoute = {
  method: "get",
  path: "/ingredients",
  handler: async (req, res) => {
    const ingredients = await getIngredients();
    res.status(200).json(ingredients);
  },
};

module.exports = getIngredientsRoute;
