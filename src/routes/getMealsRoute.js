const { getPopulatedMeals } = require("../db");

const getMealsRoute = {
  method: "get",
  path: "/meals",
  handler: async (req, res) => {
    const meals = await getPopulatedMeals();
    res.status(200).json(meals);
  },
};

module.exports = getMealsRoute;
