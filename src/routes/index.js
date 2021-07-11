const addIngredientRoute = require("./addIngredientRoute");
const addMealRoute = require("./addMealRoute");
const deleteIngredientRoute = require("./deleteIngredientRoute");
const deleteMealRoute = require("./deleteMealRoute");
const getIngredientsRoute = require("./getIngredientsRoute");
const getMealsRoute = require("./getMealsRoute");
const getRecipeRoute = require("./getRecipeRoute");
const getShoppingListRoute = require("./getShoppingListRoute");
const searchRecipesRoute = require("./searchRecipesRoute");

const routes = [
  addIngredientRoute,
  addMealRoute,
  deleteIngredientRoute,
  deleteMealRoute,
  getIngredientsRoute,
  getMealsRoute,
  getRecipeRoute,
  getShoppingListRoute,
  searchRecipesRoute,
];

module.exports = routes;
