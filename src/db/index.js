const db = require("./db");
const getPopulatedMeals = require("./getPopulatedMeals");
const getIngredients = require("./getIngredients");
const getRecipeById = require("./getRecipeById");
const insertIngredient = require("./insertIngredient");
const insertMeal = require("./insertMeal");
const deleteMeal = require("./deleteMeal");
const deleteIngredient = require("./deleteIngredient");
const searchRecipes = require("./searchRecipes");

const dbConfig = {
  db,
  getPopulatedMeals,
  getIngredients,
  getRecipeById,
  insertIngredient,
  insertMeal,
  deleteMeal,
  deleteIngredient,
  searchRecipes,
};

module.exports = dbConfig;
