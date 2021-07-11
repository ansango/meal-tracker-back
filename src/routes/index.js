const addIngredientRoute = require("./addIngredientRoute");
const addMealRoute = require("./addMealRoute");
const deleteIngredientRoute = require("./deleteIngredientRoute");
const deleteMealRoute = require("./deleteMealRoute");
const getIngredientsRoute = require("./getIngredientsRoute");
const getMealsRoute = require("./getMealsRoute");
const getShoppingListRoute = require("./getShoppingListRoute");
const searchRecipesRoute = require("./searchRecipesRoute");

const routes = [
  addIngredientRoute,
  addMealRoute,
  deleteIngredientRoute,
  deleteMealRoute,
  getIngredientsRoute,
  getMealsRoute,
  getShoppingListRoute,
  searchRecipesRoute,
];

module.exports = routes;
