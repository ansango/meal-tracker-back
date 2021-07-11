const { getRecipeById } = require("../db");

const getRecipeRoute = {
  method: "get",
  path: "/recipes/:id",
  handler: async (req, res) => {
    const { id } = req.params;
    const recipe = await getRecipeById(id);
    res.status(200).json(recipe);
  },
};

module.exports = getRecipeRoute;
